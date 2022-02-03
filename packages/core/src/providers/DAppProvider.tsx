import React from "react";
import { RecoilRoot } from "recoil";
import { configState } from "../hooks/useConfig";
import { Config } from '../types';

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
      {children}
    </RecoilRoot>
  );
};
