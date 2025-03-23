import React, { useEffect, useMemo, useState } from "react";

const Child1 = (props: {val1: boolean}) => {
  const [inChild1State, setInChild1State] = useState(false);
  const {val1} = props;
  console.log("Child1がレンダリングされた！");
  return (
    <>
      <button onClick={() => setInChild1State(!inChild1State)}>In Child1</button>
      <p>Child1: {val1? 'true': 'false'}</p>
    </>
  );
};

const Child2 = React.memo((props:{val1: boolean}) => {
  const {val1} = props;
  console.log("Child2がレンダリングされた！");
  return <p>Child2: {val1? 'true': 'false'}</p>;
});

const Child3 = () => {
  const [count, setCount] = useState(0);
  const calcCount = () => {
    console.log('calcCountが実行されました');
    return count;
  }

  const calcCountWithMemo = useMemo(() => {
    console.log('calcCountWithMemoが実行されました');
    return count;
  }, [count]);

  return (
    <>
      <p>Child3</p>
      <p>{calcCountWithMemo}</p>
      <button onClick={() => {setCount(count + 1)}}>Count Up!</button>
    </>
  );
}

const Parent = () => {
  const [parentState, setParentState] = useState(false);
  const [c1State, setC1State] = useState(false);
  const [c2State, setC2State] = useState(false);
  console.log('親コンポーネントがレンダリングされた！');
  useEffect(() => {
    console.log('親コンポーネントのuseEffectが実行された');
  });
  return (
    <>
      <button onClick={() => setParentState(!parentState)}>parentState</button>
      <button onClick={() => setC1State(!c1State)}>child01</button>
      <button onClick={() => setC2State(!c2State)}>child02</button>
      <Child1 val1={c1State}></Child1>
      <Child2 val1={c2State}></Child2>
      <Child3></Child3>
    </>
  );
}

export default Parent;