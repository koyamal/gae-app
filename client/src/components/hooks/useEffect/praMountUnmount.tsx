import { useEffect, useState } from "react";

const Comp1 = function() {
  const [state1, setState1] = useState(0);
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
  return (
    <>
      <div>This is Comp1</div>
      <button onClick={() => setState1((-1) * state1)}></button>
    </>
  );
}

export default Comp1;