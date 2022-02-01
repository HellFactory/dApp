import { atom, useRecoilValue } from 'recoil';
import { Ethers } from '../types/ethers';

const defaultEthersState: Ethers = {
  account: null,
  isUnlocked: false,
  library: undefined,
  active: false,
  isSupportNetwork: false,
  chainId: null,
  error: undefined,
  activateBrowserWallet: () => undefined,
  activate: async () => undefined,
  deactivate: () => undefined,
};

export const ethersState = atom<Ethers>({
  key: 'ethersState',
  default: defaultEthersState,
  dangerouslyAllowMutability: true,
});

export const useEther = ()=> {
  return useRecoilValue(ethersState);
}
