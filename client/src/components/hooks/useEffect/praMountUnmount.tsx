import { useEffect } from "react";

const Comp1 = function() {
  useEffect(() => {
    console.log('Comp1がマウントされました。');
  }, []);
  return (
    <>
      <div>This is Comp1</div>
    </>
  );
}

export default Comp1;