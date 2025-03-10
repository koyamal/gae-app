import userEvent from '@testing-library/user-event';
import { useCallback, useEffect, useRef, useState } from 'react';

function UseUseRef() {
  const countRef = useRef(0);
  const keyRef = useRef(0);
  const isMounted = useRef(true);
  const funcRef = useRef(() => {});
  const prevFuncRef = useRef(() => {});
  const funcNoRef = useRef(() => {});
  const prevFuncNoRef = useRef(() => {});
  const funcCallback = useRef(() => {});
  const prevFuncCallback = useRef(() => {});
  const [countState, setCountState] = useState<number>(0);

  const incrementRef = () => {
    countRef.current += 1;
  }

  const incrementRefUseCallback = useCallback(() => {
    console.log('hello');
  }, [])

  const incrementKeyRef = () => {
    keyRef.current += 1;
    prevFuncNoRef.current = funcNoRef.current;
    funcNoRef.current = incrementRef;
    if(funcNoRef.current === prevFuncNoRef.current) {
      console.log('funcNoRef.current === prevFuncNoRef.current');
    } else {
      console.log('funcNoRef.current !== prevFuncNoRef.current');
    }
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

  const incrementCallbackState = () => {
    setCountState(countState + 1);
    prevFuncCallback.current = funcCallback.current;
    funcCallback.current = incrementRefUseCallback;
    if(funcCallback.current === prevFuncCallback.current) {
      console.log('funcCallback.current === prevFuncCallback.current');
    } else {
      console.log('funcCallback.current !== prevFuncCallback.current');
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
      <button onClick={incrementCallbackState}>レンダリング</button>
    </div>
  )
}

export default UseUseRef;