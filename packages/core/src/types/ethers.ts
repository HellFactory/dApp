import { JsonRpcProvider } from "@ethersproject/providers";
import { Chain } from "./networks";

export interface EthersState {
  error: null | Error;
  account: null | string;
  chainId: null | number;
  library: null | JsonRpcProvider;
  active: boolean;
  isUnlocked: boolean;
  isInitialized: boolean;
  isSupportNetwork: boolean;
  isMetaMaskInstalled: boolean;
  // setError: (error: Error) => void
  activateBrowserWallet: () => void;
  activate: (provider?: JsonRpcProvider) => Promise<void>;
  deactivate: () => void;
  // connector: undefined
  /**
   * The switchNetwork function is a helper function that switches the network of the wallet to the target network,
   * and automatic add the network to the wallet if the network not already add.
   */
  switchNetwork: (targetNetwork?: Chain) => Promise<void>;
}
