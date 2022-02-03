import { Chain } from "../../types/networks";

export const Mainnet: Chain = {
  chainId: 1,
  chainName: "Mainnet",
  nativeCurrency: {
    name: "Ethereum Coin",
    symbol: "ETH",
    decimals: 18,
  },
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: "0xeefba1e63905ef1d7acba5a8513c70307c1ce441",
  rpcUrls: ["https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161/"],
  blockExplorerUrls: ["https://etherscan.io"],
  getExplorerAddressLink: (address: string) =>
    `https://etherscan.io/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) =>
    `https://etherscan.io/tx/${transactionHash}`,
};

export const Ropsten: Chain = {
  chainId: 3,
  chainName: "Ropsten",
  nativeCurrency: {
    name: "Ethereum Coin",
    symbol: "ETH",
    decimals: 18,
  },
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: "0x53c43764255c17bd724f74c4ef150724ac50a3ed",
  rpcUrls: ["https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161/"],
  blockExplorerUrls: ["https://ropsten.etherscan.io"],
  getExplorerAddressLink: (address: string) =>
    `https://ropsten.etherscan.io/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) =>
    `https://ropsten.etherscan.io/tx/${transactionHash}`,
};

export const Rinkeby: Chain = {
  chainId: 4,
  chainName: "Rinkeby",
  nativeCurrency: {
    name: "Ethereum Coin",
    symbol: "ETH",
    decimals: 18,
  },
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: "0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821",
  rpcUrls: ["https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161/"],
  blockExplorerUrls: ["https://rinkeby.etherscan.io"],
  getExplorerAddressLink: (address: string) =>
    `https://rinkeby.etherscan.io/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) =>
    `https://rinkeby.etherscan.io/tx/${transactionHash}`,
};

export const Goerli: Chain = {
  chainId: 5,
  chainName: "Goerli",
  nativeCurrency: {
    name: "Ethereum Coin",
    symbol: "ETH",
    decimals: 18,
  },
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: "0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e",
  rpcUrls: ["https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161/"],
  blockExplorerUrls: ["https://goerli.etherscan.io"],
  getExplorerAddressLink: (address: string) =>
    `https://goerli.etherscan.io/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) =>
    `https://goerli.etherscan.io/tx/${transactionHash}`,
};

export const Kovan: Chain = {
  chainId: 42,
  chainName: "Kovan",
  nativeCurrency: {
    name: "Ethereum Coin",
    symbol: "ETH",
    decimals: 18,
  },
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: "0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a",
  rpcUrls: ["https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161/"],
  blockExplorerUrls: ["https://kovan.etherscan.io"],
  getExplorerAddressLink: (address: string) =>
    `https://kovan.etherscan.io/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) =>
    `https://kovan.etherscan.io/tx/${transactionHash}`,
};
