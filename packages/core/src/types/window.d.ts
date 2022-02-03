import { JsonRpcProvider } from '@ethersproject/providers'

export {}

declare interface RequestArguments {
  method: string
  params?: unknown[] | object
}

declare interface EthereumProvider extends JsonRpcProvider {
  _metamask: any
  request: <T = unknown>(...args: RequestArguments) => Promise<T>
}

declare global {
  interface Window {
    ethereum: EthereumProvider
  }
}
