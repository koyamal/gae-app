import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  onClickEvent:() => void;
}

const Button27: React.FC<Props> = (props) => {
  const {onClickEvent} = props;
  const classes = useStyles();
  return (
    <div className={classes.btnContainer}>
      <button onClick={onClickEvent}>240527</button>
    </div>
  );
};

const styles = {
  btnContainer: {
    color: '(27, 27, 27)',
  },
};
const useStyles = createUseStyles(styles);

export default Button27;