import React, { useState } from "react";
import { BarContext } from "./bar";

const BarProvider: React.FC = ({children}) => {
  const [bar, setBar] = useState<string| null>(null);
  const changeBar = (val: string) => {
    setBar(val);
  }
  return (
    <BarContext.Provider value={{bar, changeBar}}>
      {children}
    </BarContext.Provider>
  );
}

export default BarProvider;