import { useEffect } from "react";

const Child1 = () => {
  useEffect(() => {
    console.log('start');

    return () => {
      console.log('goal');
    }
  })
}

const PraUseEffect = () => {
  return (
    <>
      <p>hello</p>
    </>
  )
}

export default PraUseEffect;