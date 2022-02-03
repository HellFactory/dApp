import {
  atom,
  AtomEffect,
  selector,
  useRecoilValue,
  useRecoilValueLoadable,
} from 'recoil'
import detectEthereumProvider from '@metamask/detect-provider'
import { EtherOptionInterface, Chain, EthersState, Config } from '../types'
import { Mainnet, DAppErrorCode } from '../constants'
import { configState } from './useConfig'

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
}
const initialize = async (
  defaultState: EthersState,
  config: Config
): Promise<EthersState> => {
  const provider = (await detectEthereumProvider()) as any
  if (!provider) {
    return defaultEthersState
  }
  const [chainId, accounts, isUnlocked] = await Promise.all([
    provider.request({ method: 'eth_chainId' }),
    provider.request({ method: 'eth_accounts' }),
    provider._metamask.isUnlocked(),
  ])
  const parsedChainId = parseInt(chainId, 16)
  const isSupportNetwork = !!(config.networks || []).find(
    (n) => n.chainId === parsedChainId
  )
  return {
    ...(defaultState || {}),
    isUnlocked,
    account: accounts?.[0] || null,
    chainId: parsedChainId,
    library: provider,
    isSupportNetwork,
    isMetaMaskInstalled: provider.isMetaMask,
    active: provider.isConnected(),
    reInitialize: initialize as () => Promise<EthersState>,
    activateBrowserWallet: async () => {
      await provider.request({ method: 'eth_requestAccounts' })
    },
    switchNetwork: async (targetNetwork: Chain = Mainnet) => {
      const network = {
        chainId: `0x${targetNetwork.chainId.toString(16)}`,
        chainName: targetNetwork.chainName,
        nativeCurrency: targetNetwork.nativeCurrency,
        rpcUrls: targetNetwork.rpcUrls,
        blockExplorerUrls: targetNetwork.blockExplorerUrls,
      }
      try {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: network.chainId }],
        })
      } catch (error: any) {
        if (error.code && error.code === DAppErrorCode.UnrecognizedChainId) {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [network, accounts?.[0] || null],
          })
        }
      }
    },
  }
}

export const etherSelector = selector({
  key: 'etherStateSelector',
  get: async ({ get }) => {
    const config = get(configState)
    const ether = get(ethersState)
    return initialize(ether, config)
  },
  dangerouslyAllowMutability: true,
})

export const ethersState = atom<EthersState>({
  key: 'ethersState',
  default: defaultEthersState,
  dangerouslyAllowMutability: true,
})

export const useEther = (options?: EtherOptionInterface): EthersState => {
  if (options?.suspend) {
    return useRecoilValue(etherSelector)
  }
  const { state, contents } = useRecoilValueLoadable(etherSelector)
  switch (state) {
    case 'hasError':
      return defaultEthersState
    case 'hasValue':
      return contents
    case 'loading':
      return contents
  }
}
