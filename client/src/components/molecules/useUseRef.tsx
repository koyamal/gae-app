import { useRef } from 'react';

function UseUseRef() {
  const countRef = useRef(0);

  const incrementRef = () => {
    countRef.current += 1;
  }

  return (
    <div>
      <p>{countRef.current}</p>
      <button onClick={incrementRef}>incrementRef</button>
    </div>
  )
}

export default UseUseRef;