import { useEffect, useRef, useState } from "react";

const Child1 = (props: {state: boolean}) => {
  const useRefValue = useRef('');
  useEffect(() => {
    console.log('start');
    useRefValue.current = 'start';

    return () => {
      console.log('goal');
      useRefValue.current = 'goal';
    }
  })

  useEffect(() => {
    console.log('start: with state');
    if(useRefValue) {
      console.log('hello');
    }
    if(props.state) {
      console.log('true');
    }

    return () => {
      console.log('goal: with state');
    }
  }, [props.state]);
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
      {renderC1Flag && <Child1 state={renderC1Flag1}></Child1>}
      <button onClick={() => setRenderC1Flag(!renderC1Flag)}>C1 toggle</button>
      <button onClick={() => setRenderC1Flag1(!renderC1Flag1)}>C1 toggle1</button>
    </>
  )
}

export default PraUseEffect;