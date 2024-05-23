import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  onClickEvent:() => void;
}

const Button21: React.FC<Props> = (props) => {
  const {onClickEvent} = props;
  const classes = useStyles();
  return (
    <div className={classes.btnContainer}>
      <button onClick={onClickEvent}>240521</button>
    </div>
  );
};

const styles = {
  btnContainer: {
    color: '(21, 21, 21)',
  },
};
const useStyles = createUseStyles(styles);

export default Button21;