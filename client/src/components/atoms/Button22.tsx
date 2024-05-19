import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  onClickEvent:() => void;
}

const Button22: React.FC<Props> = (props) => {
  const {onClickEvent} = props;
  const classes = useStyles();
  return (
    <div className={classes.btnContainer}>
      <button onClick={onClickEvent}>240522</button>
    </div>
  );
};

const styles = {
  btnContainer: {
    color: '(22, 22, 22)',
  },
};
const useStyles = createUseStyles(styles);

export default Button22;