import { JsonRpcProvider } from "@ethersproject/providers";

declare interface Ethers {
  // activate: (provider: SupportedProviders) => Promise<void>
  // setError: (error: Error) => void
  deactivate: () => void;
  // connector: undefined
  chainId?: ChainId;
  account?: null | string;
  error?: Error;
  library?: JsonRpcProvider;
  active: boolean;
  activateBrowserWallet: () => void;
}
