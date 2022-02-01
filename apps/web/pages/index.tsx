import { useEther } from 'core';

export default function Web() {
  const {
    activateBrowserWallet,
    active,
    chainId,
    account,
    isUnlocked,
    isSupportNetwork
  } = useEther();
  return (
    <>
      <div>
        <h1>Web</h1>
        <button onClick={activateBrowserWallet}>
          Connect Wallet
        </button>
        <p>
          Wallet Connect Status : {active ? 'Active' : 'Disable'}
        </p>
        <p>
          ChainId : {chainId}
        </p>
        <p>
          Address : {account}
        </p>
        <p>
          Unlock wallet ? : {isUnlocked ? 'yes' : 'no'}
        </p>
        <p>
          Support chain ? : {isSupportNetwork ? 'yes' : 'no'}
        </p>
      </div>
    </>
  );
}
