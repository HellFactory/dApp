import { JsonRpcProvider } from "@ethersproject/providers";
import { Chain } from "./networks";

export interface Ethers {
  // setError: (error: Error) => void
  deactivate: () => void;
  isUnlocked: boolean;
  isSupportNetwork: boolean;
  activate: (provider?: JsonRpcProvider) => Promise<void>;
  // connector: undefined
  chainId?: null | number;
  account?: null | string;
  error?: undefined | Error;
  library?: JsonRpcProvider;
  active: boolean;
  activateBrowserWallet: () => void;
  /**
   * The switchNetwork function is a helper function that switches the network of the wallet to the target network,
   * and automatic add the network to the wallet if the network not already add.
   */
  switchNetwork: (targetNetwork?: Chain) => Promise<void>;
}
