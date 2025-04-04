import { useEffect, useState } from "react";

interface Props {
  func: () => boolean
}

const Child01 = function(props: Props) {
  const [state1, setState1] = useState(true);
  useEffect(() => {
    const { func } = props;
    state1 && (func() && setState1(!state1));
    console.log('Child01が再レンダリングされました');
  });
  return (
    <div>Child01</div>
  );
}

export default Child01;