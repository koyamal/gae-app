import { useEffect, useState } from "react";

const Child1 = () => {
  useEffect(() => {
    console.log('start');

    return () => {
      console.log('goal');
    }
  })
}

const PraUseEffect = () => {
  const [renderC1Flag, setRenderC1Flag] = useState(false);
  return (
    <>
      <p>hello</p>
      <button onClick={() => setRenderC1Flag(!renderC1Flag)}>C1 toggle</button>
    </>
  )
}

export default PraUseEffect;