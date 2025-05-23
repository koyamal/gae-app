import { useEffect, useState } from "react";

const Comp1 = function() {
  const [state1, setState1] = useState(1);
  useEffect(() => {
    console.log('Comp1がマウントされました。');

    return () => {
      console.log('Comp1がアンマウントされました。');
    }
  }, []);

  useEffect(() => {
    console.log('Comp1がレンダリングされました。');
  });

  useEffect(() => {
    if(state1) {
      console.log('state1がtrueに変化');
    } else {
      console.log('state1がtrueに変化');
    }
  }, [state1]);

  const changeState1 = () => {
    setState1((-1) * state1);
  }
  return (
    <>
      <div>This is Comp1</div>
      <button onClick={changeState1}>*-1</button>
      <button onClick={() => setState1(1)}>reset</button>
    </>
  );
}

export default Comp1;