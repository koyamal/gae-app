import { useEffect, useRef, useState } from 'react';

function UseUseRef() {
  const countRef = useRef(0);
  const keyRef = useRef(0);
  const [countState, setCountState] = useState<number>(0);

  const incrementRef = () => {
    countRef.current += 1;
  }

  const incrementKeyRef = () => {
    keyRef.current += 1;
  }

  const incrementState = () => {
    setCountState(countState + 1);
  }

  useEffect(() => {
    console.log('useEffect is called');
    return () => {
      console.log('useUseRef is unmounted');
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