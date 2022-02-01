import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { configState } from "../hooks";
import { NetworkProvider } from "./NetworkProvider";

interface DAppProviderProps {
  config?: Config;
}

export const DAppProvider: React.FC<DAppProviderProps> = ({
  children,
  config,
}) => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        if (config) {
          set(configState, config);
        }
      }}
    >
      <NetworkProvider>{children}</NetworkProvider>
    </RecoilRoot>
  );
};
