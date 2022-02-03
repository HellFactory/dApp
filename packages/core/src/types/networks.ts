export type Currency = {
  name: string
  symbol: string
  decimals: number
}

export type Chain = {
  chainId: number
  chainName: string
  nativeCurrency: Currency
  isTestChain: boolean
  isLocalChain: boolean
  multicallAddress: string
  rpcUrls: string[]
  blockExplorerUrls: string[]
  getExplorerAddressLink: (address: string) => string
  getExplorerTransactionLink: (address: string) => string
}
