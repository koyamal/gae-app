import { useEffect, useState } from "react";

const Child1 = () => {
  useEffect(() => {
    console.log('start');

    return () => {
      console.log('goal');
    }
  })

  useEffect(() => {
    console.log('start: state');

    return () => {
      console.log('goal: state');
    }
  }, []);
  return (
    <>
      <p>Child1</p>
    </>
  )
}

const PraUseEffect = () => {
  const [renderC1Flag, setRenderC1Flag] = useState(false);
  const [renderC1Flag1, setRenderC1Flag1] = useState(false);
  return (
    <>
      <p>hello</p>
      {renderC1Flag && <Child1></Child1>}
      <button onClick={() => setRenderC1Flag(!renderC1Flag)}>C1 toggle</button>
      <button onClick={() => setRenderC1Flag1(!renderC1Flag1)}>C1 toggle1</button>
    </>
  )
}

export default PraUseEffect;