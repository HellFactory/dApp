import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ethersState } from "../hooks/useEthers";
import detectEthereumProvider from "@metamask/detect-provider";

export const NetworkProvider: React.FC = ({ children }) => {
  const [ethers, setEthers] = useRecoilState(ethersState);

  useEffect(() => {
    (async () => {
      const provider = (await detectEthereumProvider()) as any;
      if (provider) {
        setEthers({
          ...ethers,
          library: provider,
        });
      }
    })();
  }, []);

  useEffect(() => {
    if (!ethers.library) return;
    console.log(ethers);
  }, [ethers]);

  return <>{children}</>;
};
