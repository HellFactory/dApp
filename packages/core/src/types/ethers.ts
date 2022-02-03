import { JsonRpcProvider } from '@ethersproject/providers'
import { Chain } from './networks'
import { Config } from './config'

export interface EtherOptionInterface {
  suspend?: boolean
}

export interface EthersState {
  error: null | Error
  account: null | string
  chainId: null | number
  library: null | JsonRpcProvider | any
  active: boolean
  isUnlocked: boolean
  isInitialized: boolean
  isSupportNetwork: boolean
  isMetaMaskInstalled: boolean
  // setError: (error: Error) => void
  activateBrowserWallet: () => void
  activate: (provider?: JsonRpcProvider) => Promise<void>
  reInitialize?: (
    etherState: Partial<EthersState>,
    config: Config
  ) => Promise<EthersState>
  deactivate: () => void
  // connector: undefined
  /**
   * The switchNetwork function is a helper function that switches the network of the wallet to the target network,
   * and automatic add the network to the wallet if the network not already add.
   */
  switchNetwork: (targetNetwork?: Chain) => Promise<void>
}

export interface ChainCall {
  address: string
  data: string
}

export type ChainState = {
  [address: string]: {
    [data: string]: string | undefined
  }
}
