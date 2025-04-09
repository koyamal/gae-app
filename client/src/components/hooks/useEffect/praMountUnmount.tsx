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
  return (
    <>
      <div>This is Comp1</div>
    </>
  );
}

export default Comp1;