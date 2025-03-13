import React, {useContext} from "react";
import { BarContext } from "./bar";

const UseBarContext: React.FC = () => {
  const bar = useContext(BarContext);

  return (
    <div>
      {bar ? <div>{bar}</div>: <div>null</div>}
    </div>
  );
}

export default UseBarContext;