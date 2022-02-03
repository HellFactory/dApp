import { useEther } from "core";

export default function Web() {
  const {
    activateBrowserWallet,
    switchNetwork,
    active,
    chainId,
    account,
    isUnlocked,
    isSupportNetwork,
    isMetaMaskInstalled,
  } = useEther();

  const handleSwitchNetwork = async () => {
    await switchNetwork();
  };

  return (
    <>
      <div>
        <h1>Web</h1>
        <hr />
        <p>Wallet Connect Status : {active ? "Active" : "Disable"}</p>
        <p>ChainId : {chainId}</p>
        <p>Address : {account}</p>
        <p>Unlock wallet ? : {isUnlocked ? "yes" : "no"}</p>
        <p>Support chain ? : {isSupportNetwork ? "yes" : "no"}</p>
        <hr />
        {!isMetaMaskInstalled ? (
          <button>MetaMask not Installed!</button>
        ) : !isSupportNetwork ? (
          <button onClick={activateBrowserWallet}>Connect Wallet</button>
        ) : (
          <button onClick={handleSwitchNetwork}>Switch Network</button>
        )}
      </div>
    </>
  );
}
