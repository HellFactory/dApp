import { atom } from "recoil";
import { Ethers } from "../types/ethers";

const defaultEthersState: Ethers = {
  account: null,
  library: undefined,
  activateBrowserWallet: () => undefined,
  active: false,
  chainId: null,
  error: undefined,
  deactivate: () => undefined,
};

export const ethersState = atom<Ethers>({
  key: "ethersState",
  default: defaultEthersState,
});

// export const
