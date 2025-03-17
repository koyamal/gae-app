import { useCallback, useRef } from "react";

const PraUseCallback = () => {
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