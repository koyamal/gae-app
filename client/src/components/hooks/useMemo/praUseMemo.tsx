import React from "react";

export const Child1 = React.memo((props: {val1: string}) => {
  console.log("Childがレンダリングされた！");
  return <p>Value: {props.val1}</p>;
});

export const Child2 = React.memo((props:{val1: string}) => {
  console.log("Childがレンダリングされた！");
  return <p>Count: {props.val1}</p>;
});

const Parent = () => {
  return (
    <>
      <Child1 val1={'hello'}></Child1>
      <Child2></Child2>
    </>
  );
}
