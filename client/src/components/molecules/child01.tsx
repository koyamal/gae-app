import { useEffect } from "react";

interface Props {
  func: () => void
}

const Child01 = function(props: Props) {
  useEffect(() => {
    console.log('Child01が再レンダリングされました');
  });
  return (
    <div>Child01</div>
  );
}

export default Child01;