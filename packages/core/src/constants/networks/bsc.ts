import { Chain } from '../../types/networks'

export const BSC: Chain = {
  chainId: 56,
  chainName: 'BSC Mainnet',
  nativeCurrency: {
    name: 'Binance Coin',
    symbol: 'BNB', // 2-6 characters long
    decimals: 18,
  },
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: '0x41263cba59eb80dc200f3e2544eda4ed6a90e76c',
  rpcUrls: ['https://bsc-dataseed.binance.org/'],
  blockExplorerUrls: ['https://bscscan.com'],
  getExplorerAddressLink: (address: string) =>
    `https://bscscan.com/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) =>
    `https://bscscan.com/tx/${transactionHash}`,
}

export const BSCTestnet: Chain = {
  chainId: 97,
  chainName: 'BSC Testnet',
  nativeCurrency: {
    name: 'Binance Coin',
    symbol: 'BNB', // 2-6 characters long
    decimals: 18,
  },
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C',
  rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
  blockExplorerUrls: ['https://testnet.bscscan.com'],
  getExplorerAddressLink: (address: string) =>
    `https://testnet.bscscan.com/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) =>
    `https://testnet.bscscan.com/tx/${transactionHash}`,
}
