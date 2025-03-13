import React, {useContext, useEffect} from "react";
import { BarContext } from "./bar";

const UseBarContext: React.FC = () => {
  let bar = useContext(BarContext);

  return (
    <>
    <div>
      {bar.bar ? <div>{bar.bar}</div>: <div>null</div>}
    </div>
    <button onClick={() => {bar.changeBar('hello')}}>hello</button>
    </>
  );
}

export default UseBarContext;