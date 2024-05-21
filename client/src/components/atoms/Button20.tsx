import { on } from 'events';
import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  onClickEvent:() => void;
}

const Button20: React.FC<Props> = (props) => {
  const {onClickEvent} = props;
  const classes = useStyles();
  return (
    <div className={classes.btnContainer}>
      <button onClick={onClickEvent}>240520</button>
    </div>
  );
};

const styles = {
  btnContainer: {
    color: '(20, 20, 20)',
  },
};
const useStyles = createUseStyles(styles);

export default Button20;