import { atom, useRecoilState, useRecoilValue } from "recoil";
import {
  Goerli,
  Kovan,
  Mainnet,
  Rinkeby,
  Ropsten,
} from "../constants/networks/ethereum";
import { BSC, BSCTestnet } from "../constants/networks/bsc";
import { Harmony } from "../constants/networks/harmony";

export const configState = atom<Config>({
  key: "configState",
  default: {
    networks: [
      Mainnet,
      Ropsten,
      Rinkeby,
      Goerli,
      Kovan,
      BSC,
      BSCTestnet,
      Harmony,
    ],
  },
});

export const useConfig = () => {
  return useRecoilValue(configState);
};
