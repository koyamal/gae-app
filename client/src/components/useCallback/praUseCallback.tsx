import { useCallback, useEffect, useRef, useState } from "react";

const PraUseCallback = () => {
  const fn1Ref = useRef(() => {});
  const fn2Ref = useRef(() => {});
  const [state, setState] = useState(true);
  const fn1 = () => {
    console.log('fn1');
  }

  const fn2 = useCallback(() => {
    console.log('fn2');
  }, []);

  useEffect(() => {
    console.log(fn1Ref.current === fn1);
    console.log(fn2Ref.current === fn2);
    fn1Ref.current = fn1;
    fn2Ref.current = fn2;
  });

  return (
    <>
      <button onClick={() => setState(!state)}>state</button>
    </>
  );
}

export default PraUseCallback;