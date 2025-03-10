import { useEffect, useRef, useState } from 'react';

function UseUseRef() {
  const countRef = useRef(0);
  const keyRef = useRef(0);
  const isMounted = useRef(true);
  const funcRef = useRef(() => {});
  const prevFuncRef = useRef(() => {});
  const funcNoRef = useRef(() => {});
  const prevFuncNoRef = useRef(() => {});
  const [countState, setCountState] = useState<number>(0);

  const incrementRef = () => {
    countRef.current += 1;
  }

  const incrementKeyRef = () => {
    keyRef.current += 1;
    prevFuncNoRef.current = funcNoRef.current;
    funcNoRef.current = incrementRef;
  }

  const incrementState = () => {
    setCountState(countState + 1);
    prevFuncRef.current = funcRef.current;
    funcRef.current = incrementRef;
    if(funcRef.current === prevFuncRef.current) {
      console.log('funcRef.current === prevFuncRef.current');
    } else {
      console.log('funcRef.current !== prevFuncRef.current');
    }
  }

  useEffect(() => {
    console.log('useEffect is called');
    return () => {
      console.log('useUseRef is unmounted');
    }
  }, []);

  useEffect(() => {
    if(isMounted.current) {
      console.log('isMounted is true');
    }

    return () => {
      isMounted.current = false;
    }
  }, []);

  return (
    <div>
      <p>countRef: {countRef.current}</p>
      <button onClick={incrementRef}>incrementRef</button>
      <p key={keyRef.current}>keyRef: {keyRef.current}</p>
      <button onClick={incrementKeyRef}>KeyRef</button>
      <p>レンダリング: {countState}</p>
      <button onClick={incrementState}>レンダリング</button>
    </div>
  )
}

export default UseUseRef;