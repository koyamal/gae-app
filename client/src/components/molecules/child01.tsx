import { useEffect, useState } from "react";

interface Props {
  func: () => void
}

const Child01 = function(props: Props) {
  const [state1, setState1] = useState(true);
  useEffect(() => {
    const { func } = props;
    func();
    console.log('Child01が再レンダリングされました');
  });
  return (
    <div>Child01</div>
  );
}

export default Child01;