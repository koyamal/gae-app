import { useRef, useState } from 'react';

function UseUseRef() {
  const countRef = useRef(0);
  const [countState, setCountState] = useState<number>(0);

  const incrementRef = () => {
    countRef.current += 1;
  }

  const incrementState = () => {
    setCountState(countState + 1);
  }

  return (
    <div>
      <p>countRef: {countRef.current}</p>
      <button onClick={incrementRef}>incrementRef</button>
      <p>レンダリング: {countState}</p>
      <button onClick={incrementState}>レンダリング</button>
    </div>
  )
}

export default UseUseRef;