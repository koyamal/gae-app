import React from "react";

const Child1 = (props: {val1: string}) => {
  console.log("Child1がレンダリングされた！");
  return <p>Value: {props.val1}</p>;
};

const Child2 = React.memo((props:{val1: string}) => {
  console.log("Child2がレンダリングされた！");
  return <p>Count: {props.val1}</p>;
});

const Parent = () => {
  return (
    <>
      <Child1 val1={'hello'}></Child1>
      <Child2 val1={'bye'}></Child2>
    </>
  );
}

export default Parent;