import { useBlockNumber, useEther, useSetBlockNumber } from 'core'

const WithSuspendEther = () => {
  const {
    active,
    chainId,
    account,
    isUnlocked,
    isSupportNetwork,
    activateBrowserWallet,
    isMetaMaskInstalled,
    switchNetwork,
  } = useEther({ suspend: true })
  const blockNumber = useBlockNumber()
  const setBlockNumber = useSetBlockNumber()
  const handleSwitchNetwork = async () => {
    await switchNetwork()
  }
  return (
    <div>
      <p>Wallet Connect Status : {active ? 'Active' : 'Disable'}</p>
      <p>ChainId : {chainId}</p>
      <p>Address : {account}</p>
      <p>Unlock wallet ? : {isUnlocked ? 'yes' : 'no'}</p>
      <p>Support chain ? : {isSupportNetwork ? 'yes' : 'no'}</p>
      {!isMetaMaskInstalled ? (
        <button>MetaMask not Installed!</button>
      ) : !isSupportNetwork ? (
        <button onClick={activateBrowserWallet}>Connect Wallet</button>
      ) : (
        <button onClick={handleSwitchNetwork}>Switch Network</button>
      )}
      <div style={{ margin: '10px 0' }}>
        Block Number: {blockNumber.currentBlockNumber} <br />
        <button
          onClick={() => {
            blockNumber.getBlockNumber().then((blockNumberText: any) => {
              setBlockNumber((oldState) => ({
                ...oldState,
                currentBlockNumber: parseInt(blockNumberText, 16),
              }))
            })
          }}
        >
          Update Block Number
        </button>
      </div>
    </div>
  )
}
export default WithSuspendEther;
