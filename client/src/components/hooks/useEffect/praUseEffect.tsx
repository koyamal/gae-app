import { useEffect, useState } from "react";

const Child1 = () => {
  useEffect(() => {
    console.log('start');

    return () => {
      console.log('goal');
    }
  })
  return (
    <>
      <p>Child1</p>
    </>
  )
}

const PraUseEffect = () => {
  const [renderC1Flag, setRenderC1Flag] = useState(false);
  return (
    <>
      <p>hello</p>
      {renderC1Flag && <Child1></Child1>}
      <button onClick={() => setRenderC1Flag(!renderC1Flag)}>C1 toggle</button>
    </>
  )
}

export default PraUseEffect;