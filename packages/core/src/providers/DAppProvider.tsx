import React from "react";
import { RecoilRoot } from "recoil";

export const DAppProvider: React.FC = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>
}
