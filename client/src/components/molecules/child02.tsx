import { useEffect } from "react";

interface Props {
  func: () => void
}

const Child02 = function(props: Props) {
  useEffect(() => {
    console.log('Child02が再レンダリングされました');
  });
  return (
    <div>Child2</div>
  );
}

export default Child02;