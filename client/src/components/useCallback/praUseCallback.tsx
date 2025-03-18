import { useCallback, useEffect, useRef } from "react";

const PraUseCallback = () => {
  const fn1Ref = useRef(() => {});
  const fn2Ref = useRef(() => {});
  const fn1 = () => {
    console.log('fn1');
  }

  const fn2 = useCallback(() => {
    console.log('fn2');
  }, []);

  fn1();
  fn2();

  return (
    <div>hello</div>
  );
}

export default PraUseCallback;