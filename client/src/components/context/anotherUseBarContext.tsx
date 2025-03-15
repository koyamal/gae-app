import React, {useContext, useEffect} from "react";
import { BarContext } from "./bar";

const AnotherUseBarContext: React.FC = () => {
  const bar = useContext(BarContext);

  return (
    <>
    <button onClick={() => {bar.changeBar('bye')}}>bye</button>
    </>
  );
}

export default AnotherUseBarContext;