import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { BlockNumberState } from '../types'

const defaultBlockNumberState: BlockNumberState = {
  currentBlockNumber: undefined,
  getBlockNumber: async () => undefined,
  updateBlockNumber: async () => undefined,
}

export const blockNumberState = atom<BlockNumberState>({
  key: 'blockNumberState',
  default: defaultBlockNumberState,
  dangerouslyAllowMutability: true,
})

export const useBlockNumber = () => {
  return useRecoilValue(blockNumberState)
}

export const useSetBlockNumber = () => {
  return useSetRecoilState(blockNumberState)
}
