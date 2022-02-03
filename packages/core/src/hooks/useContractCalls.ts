import { Provider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'
import { BigNumber } from '@ethersproject/bignumber'

const ABI = [
  'function aggregate(tuple(address target, bytes callData)[] calls) view returns (uint256 blockNumber, bytes[] returnData)',
]
export const useContractCalls = (
  library: Provider,
  multicallAddress: string,
  blockNumber: number,
  requests: any
) => {
  if (!library) {
    return
  }
  const contract = new Contract(multicallAddress, ABI, library)
  const [, results]: [BigNumber, string[]] = await contract.aggregate(
    requests.map(({ address, data }) => [address, data]),
    { blockTag: blockNumber }
  )
  const state: ChainState = {}
  for (let i = 0; i < requests.length; i++) {
    const { address, data } = requests[i]
    const result = results[i]
    const stateForAddress = state[address] ?? {}
    stateForAddress[data] = result
    state[address] = stateForAddress
  }
  return state
}
