import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ethersState } from "../hooks/useEthers";
import { Web3Provider } from "@ethersproject/providers";
import detectEthereumProvider from "@metamask/detect-provider";

export const NetworkProvider: React.FC = ({ children }) => {
  const [ethers, setEthers] = useRecoilState(ethersState);
  const [state, setState] = useState();

  useEffect(() => {
    (async () => {
      const provider = (await detectEthereumProvider()) as any;
      if (provider) {
        setState(provider);
      }
      // setEthers({
      //   ...ethers,
      //   library: new Web3Provider(window.ethereum as any),
      // });
      // console.log("provider", provider);
      // console.log("window.ethereum", window.ethereum);
    })();
  }, []);

  useEffect(() => {
    if (!state) return;
    console.log(state);
  }, [state]);

  return <>{children}</>;
};
