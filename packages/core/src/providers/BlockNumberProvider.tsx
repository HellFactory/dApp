import { useEffect } from 'react'
import { useEther, useSetBlockNumber } from '../hooks'

const BlockNumberProvider: React.FC = ({ children }) => {
  const { library } = useEther()
  const setBlockNumber = useSetBlockNumber()
  const getBlockNumber = async () => {
    return library.request({
      method: 'eth_blockNumber',
    })
  }
  useEffect(() => {
    if (!library) {
      return
    }
    ;(async () => {
      const blockNumberText = await getBlockNumber()
      setBlockNumber((blockNumberState) => ({
        ...blockNumberState,
        getBlockNumber,
        currentBlockNumber: parseInt(blockNumberText, 16),
      }))
    })()
  }, [library])
  return <>{children}</>
}

export default BlockNumberProvider
