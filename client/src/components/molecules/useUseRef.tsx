import { useCallback, useEffect, useRef, useState } from 'react';
import Child01 from './child01';
import Child02 from './child02';
import Child03 from './child03';

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
  const [flagReCreate, setFlagReCreate] = useState<boolean>(false);

  const incrementRef = () => {
    countRef.current += 1;
  };

  const incrementRefUseCallback = useCallback(() => {
    console.log('hello');
  }, [flagReCreate]);

  const setFlag = () => {
    setCountState(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === 10) {
        setFlagReCreate(true);
        console.log('setFlag is called');
      }
      return newCount;
    });
  };

  const incrementKeyRef = () => {
    keyRef.current += 1;
    prevFuncNoRef.current = funcNoRef.current;
    funcNoRef.current = incrementRef;
    console.log(
      funcNoRef.current === prevFuncNoRef.current
        ? 'funcNoRef.current === prevFuncNoRef.current'
        : 'funcNoRef.current !== prevFuncNoRef.current'
    );
  };

  const incrementState = () => {
    setFlag();
  };

  const incrementCallbackState = () => {
    setFlag();
    prevFuncCallback.current = funcCallback.current;
    funcCallback.current = incrementRefUseCallback;
    console.log(
      funcCallback.current === prevFuncCallback.current
        ? 'funcCallback.current === prevFuncCallback.current'
        : 'funcCallback.current !== prevFuncCallback.current'
    );
  };

  useEffect(() => {
    console.log('useEffect is called');
    isMounted.current = true;

    return () => {
      console.log('useUseRef is unmounted');
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    console.log('incrementRefUseCallback が更新されました');
  }, [incrementRefUseCallback]);

  return (
    <div>
      <Child01 func={incrementRef} />
      <Child02 func={incrementRefUseCallback} />
      <Child03 func={incrementRefUseCallback} />
      <p>countRef: {countRef.current}</p>
      <button onClick={incrementRef}>incrementRef</button>
      <p key={keyRef.current}>keyRef: {keyRef.current}</p>
      <button onClick={incrementKeyRef}>KeyRef</button>
      <p>レンダリング: {countState}</p>
      <button onClick={incrementState}>レンダリング</button>
      <button onClick={incrementCallbackState}>レンダリング</button>
    </div>
  );
}

export default UseUseRef;