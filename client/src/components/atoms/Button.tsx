import { on } from 'events';
import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  onClickEvent:() => void;
}

const Button: React.FC<Props> = (props) => {
  const {onClickEvent} = props;
  const classes = useStyles();
  return (
    <div className={classes.btnContainer}>
      <button onClick={onClickEvent}></button>
    </div>
  );
};

const styles = {
  btnContainer: {
  },
};
const useStyles = createUseStyles(styles);

export default Button;