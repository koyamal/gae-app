import { useEffect } from "react";

interface Props {
  func: () => {}
}

const Child01 = function(props: Props) {
  useEffect(() => {
    console.log('Child01が再レンダリングされました');
  });
  return (
    <div>hello</div>
  );
}

export default Child01;