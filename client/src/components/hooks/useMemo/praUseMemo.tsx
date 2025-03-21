import React, { useState } from "react";

const Child1 = (props: {val1: boolean}) => {
  const {val1} = props;
  console.log("Child1がレンダリングされた！");
  return <p>Child1: {val1? 'true': 'false'}</p>;
};

const Child2 = React.memo((props:{val1: boolean}) => {
  const {val1} = props;
  console.log("Child2がレンダリングされた！");
  return <p>Child2: {val1? 'true': 'false'}</p>;
});

const Parent = () => {
  const [parentState, setParentState] = useState(false);
  const [c1State, setC1State] = useState(false);
  const [c2State, setC2State] = useState(false);
  console.log('親コンポーネントがレンダリングされた！');
  return (
    <>
      <button onClick={() => setParentState(!parentState)}>parentState</button>
      <button onClick={() => setC1State(!c1State)}>child01</button>
      <button onClick={() => setC2State(!c2State)}>child02</button>
      <Child1 val1={c1State}></Child1>
      <Child2 val1={c2State}></Child2>
    </>
  );
}

export default Parent;