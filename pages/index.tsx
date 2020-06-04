import React from "react";
import { getInitialLocale } from "../translations/getInitialLocale";


const Index: React.FC = () => {
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`);
  });
  return <> </>;
};

export default Index;
