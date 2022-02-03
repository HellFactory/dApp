import { useEther } from 'core'

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
  } = useEther()

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
      <div>
        Block Number: <pre>{JSON.stringify({}, null, 2)}</pre>
      </div>
    </div>
  )
}
export default WithSuspendEther;
