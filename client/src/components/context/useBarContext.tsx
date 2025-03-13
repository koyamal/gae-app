import React, {useContext, useEffect} from "react";
import { BarContext } from "./bar";

const UseBarContext: React.FC = () => {
  let bar = useContext(BarContext);

  useEffect(() => {
    bar = 'hello'
  }, []);

  return (
    <div>
      {bar ? <div>{bar}</div>: <div>null</div>}
    </div>
  );
}

export default UseBarContext;