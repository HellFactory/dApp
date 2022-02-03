import { Chain } from "../../types/networks";

export const Harmony: Chain = {
  chainId: 1666600000,
  chainName: "Harmony Mainnet",
  nativeCurrency: {
    name: "Harmony Coin",
    symbol: "ONE",
    decimals: 18,
  },
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: "0xFE4980f62D708c2A84D3929859Ea226340759320",
  rpcUrls: [
    "https://api.harmony.one",
    "https://s1.api.harmony.one",
    "https://s2.api.harmony.one",
    "https://s3.api.harmony.one",
  ],
  blockExplorerUrls: ["https://explorer.harmony.one/"],
  getExplorerAddressLink: (address: string) =>
    `https://explorer.harmony.one/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) =>
    `https://explorer.harmony.one/tx/${transactionHash}`,
};

export const HarmonyTestnet: Chain = {
  chainId: 1666700000,
  chainName: "Harmony Testnet",
  nativeCurrency: {
    name: "Harmony Coin",
    symbol: "ONE",
    decimals: 18,
  },
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: "0xd078799c53396616844e2fa97f0dd2b4c145a685",
  rpcUrls: [
    "https://api.s0.b.hmny.io",
    "https://api.s1.b.hmny.io",
    "https://api.s2.b.hmny.io",
    "https://api.s3.b.hmny.io",
  ],
  blockExplorerUrls: ["https://explorer.pops.one/"],
  getExplorerAddressLink: (address: string) =>
    `https://explorer.pops.one/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) =>
    `https://explorer.pops.one/tx/${transactionHash}`,
};
