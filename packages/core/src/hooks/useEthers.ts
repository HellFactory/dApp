import { atom, useRecoilValue } from "recoil";
import { EthersState } from "../types/ethers";

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

export const ethersState = atom<EthersState>({
  key: "ethersState",
  default: defaultEthersState,
  dangerouslyAllowMutability: true,
});

export const useEther = () => {
  return useRecoilValue(ethersState);
};
