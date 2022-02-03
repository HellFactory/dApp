import { atom, useRecoilValue } from 'recoil'
import {
  Goerli,
  Kovan,
  Mainnet,
  Rinkeby,
  Ropsten,
  BSC,
  BSCTestnet,
  Harmony,
  HarmonyTestnet,
} from '../constants'
import { Config } from '../types'

export const configState = atom<Config>({
  key: 'configState',
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
      HarmonyTestnet,
    ],
  },
})

export const useConfig = () => {
  return useRecoilValue(configState)
}
