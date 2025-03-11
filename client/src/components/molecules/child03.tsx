import { useEffect, memo } from "react";

interface Props {
  func: () => void
}

const Child03 = memo(function(props: Props) {
  useEffect(() => {
    console.log('Child03が再レンダリングされました');
  });
  return (
    <div>Child03</div>
  );
});

export default Child03;