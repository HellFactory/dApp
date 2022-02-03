export type BlockNumberState = {
  currentBlockNumber: number | undefined
  getBlockNumber: () => Promise<number | undefined>
  updateBlockNumber: () => Promise<number | undefined>
}
