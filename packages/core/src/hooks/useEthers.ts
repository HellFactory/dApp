import { atom, AtomEffect, selector, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { EtherOptionInterface, EthersState } from '../types/ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import { Chain } from '../types';
import { Mainnet } from '../constants';
import { DAppErrorCode } from '../constants/d-app.error';
import { configState } from './useConfig';

const defaultEthersState: EthersState = {
  error: null,
  account: null,
  chainId: null,
  library: null,
  active: false,
  isUnlocked: false,
  isInitialized: false,
  isSupportNetwork: false,
  isMetaMaskInstalled: false,
  activateBrowserWallet: () => undefined,
  activate: async () => undefined,
  deactivate: () => undefined,
  switchNetwork: async () => undefined,
};

const initializeEffect: AtomEffect<EthersState> = ({ getPromise, setSelf }) => {
  if (!(process as any).browser) {
    return;
  }
  (async () => {
    const provider = (await detectEthereumProvider()) as any;
    if (!provider) {
      return;
    }
    const config = await getPromise(configState);
    const [chainId, accounts, isUnlocked] = await Promise.all([
      provider.request({ method: 'eth_chainId' }),
      provider.request({ method: 'eth_accounts' }),
      provider._metamask.isUnlocked(),
    ]);
    const parsedChainId = parseInt(chainId, 16);
    const isSupportNetwork = !!(config.networks || []).find(
      (n) => n.chainId === parsedChainId,
    );
    setSelf((etherState) => {
      return {
        ...etherState as EthersState,
        isUnlocked,
        account: accounts?.[0] || null,
        chainId: parsedChainId,
        library: provider,
        isSupportNetwork,
        isMetaMaskInstalled: provider.isMetaMask,
        active: provider.isConnected(),
        activateBrowserWallet: async () => {
          await provider.request({ method: 'eth_requestAccounts' });
        },
        switchNetwork: async (
          targetNetwork: Chain = config.networks?.[0] || Mainnet,
        ) => {
          const network = {
            chainId: `0x${targetNetwork.chainId.toString(16)}`,
            chainName: targetNetwork.chainName,
            nativeCurrency: targetNetwork.nativeCurrency,
            rpcUrls: targetNetwork.rpcUrls,
            blockExplorerUrls: targetNetwork.blockExplorerUrls,
          };
          try {
            await provider.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: network.chainId }],
            });
          } catch (error: any) {
            if (error.code && error.code === DAppErrorCode.UnrecognizedChainId) {
              await provider.request({
                method: 'wallet_addEthereumChain',
                params: [network, accounts?.[0] || null],
              });
            }
          }
        },
      };
    });
    return provider;
  })();
};

export const ethersState = atom<EthersState>({
  key: 'ethersState',
  default: defaultEthersState,
  effects: [
    initializeEffect,
  ],
  dangerouslyAllowMutability: true,
});

const etherSelector = selector({
  key: 'etherStateSelector',
  get: async ({ get }) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return get(ethersState);
  },
  dangerouslyAllowMutability: true,
});

export const useEther = (options?: EtherOptionInterface) => {
  if (options?.suspend) {
    return useRecoilValue(etherSelector);
  }
  return useRecoilValue(ethersState);
};
