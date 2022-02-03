import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ethersState } from "../hooks/useEthers";
import detectEthereumProvider from "@metamask/detect-provider";
import { useConfig } from "../hooks";
import { Chain } from "../types";
import { DAppErrorCode } from "../constants/d-app.error";
import { Mainnet } from "..";

export const NetworkProvider: React.FC = ({ children }) => {
  const [ethers, setEthers] = useRecoilState(ethersState);
  const config = useConfig();

  const handleChainChanged = () => {
    initialize();
  };
  const handleAccountsChanged = () => {
    initialize();
  };

  const initialize = async () => {
    const provider = (await detectEthereumProvider()) as any;
    if (!provider) {
      return;
    }
    const [chainId, accounts, isUnlocked] = await Promise.all([
      provider.request({ method: "eth_chainId" }),
      provider.request({ method: "eth_accounts" }),
      provider._metamask.isUnlocked(),
    ]);
    const parsedChainId = parseInt(chainId, 16);
    const isSupportNetwork = !!(config.networks || []).find(
      (n) => n.chainId === parsedChainId
    );
    setEthers({
      ...ethers,
      isUnlocked,
      account: accounts?.[0] || null,
      chainId: parsedChainId,
      library: provider,
      isSupportNetwork,
      active: provider.isConnected(),
      activateBrowserWallet: async () => {
        await provider.request({ method: "eth_requestAccounts" });
      },
      switchNetwork: async (
        targetNetwork: Chain = config.networks?.[0] || Mainnet
      ) => {
        const network = {
          chainId: `0x${targetNetwork.chainId.toString(16)}`,
          chainName: targetNetwork.chainName,
          nativeCurrency: targetNetwork.nativeCurrency,
          rpcUrls: targetNetwork.rpcUrls,
          blockExplorerUrls: targetNetwork.blockExplorerUrls,
        };
        try {
          await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: network.chainId }],
          });
        } catch (error: any) {
          if (error.code && error.code === DAppErrorCode.UnrecognizedChainId) {
            await provider.request({
              method: "wallet_addEthereumChain",
              params: [network, accounts?.[0] || null],
            });
          }
        }
      },
    });
    return provider;
  };
  useEffect(() => {
    initialize().then((provider) => {
      provider.on("chainChanged", handleChainChanged);
      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("connect", initialize);
      provider.on("disconnect", initialize);
    });
  }, []);

  return <>{children}</>;
};
