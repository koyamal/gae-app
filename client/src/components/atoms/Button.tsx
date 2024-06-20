import { on } from 'events';
import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  onClickEvent:() => void;
  children: string;
}

const Button: React.FC<Props> = (props) => {
  const {onClickEvent, children} = props;
  const classes = useStyles();
  return (
    <div className={classes.btnContainer}>
      <button onClick={onClickEvent}>{children}</button>
    </div>
  );
};

const styles = {
  btnContainer: {
  },
};
const useStyles = createUseStyles(styles);

export default Button;