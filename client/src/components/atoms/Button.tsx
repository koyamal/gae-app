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
      <button className={classes.btn} onClick={onClickEvent}>{children}</button>
    </div>
  );
};

const styles = {
  btnContainer: {
  },
  btn: {
    fontSize: "15px",
    background: "#ffffe0",
    borderRadius: "100px",
    border: "solid #f5deb3",
    '&:hover': {
      background: "#fdf5e6",
    },
  }
};
const useStyles = createUseStyles(styles);

export default Button;