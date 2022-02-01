import { JsonRpcProvider } from "@ethersproject/providers";

declare interface Ethers {
  // setError: (error: Error) => void
  deactivate: () => void;
  isUnlocked: boolean;
  isSupportNetwork: boolean;
  activate: (provider?: JsonRpcProvider) => Promise<void>
  // connector: undefined
  chainId?: null | number;
  account?: null | string;
  error?: undefined | Error;
  library?: JsonRpcProvider;
  active: boolean;
  activateBrowserWallet: () => void;
}
