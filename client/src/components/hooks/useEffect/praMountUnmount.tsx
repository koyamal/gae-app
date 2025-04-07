import { useEffect } from "react";

const Comp1 = function() {
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