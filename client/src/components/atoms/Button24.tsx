import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  onClickEvent:() => void;
}

const Button24: React.FC<Props> = (props) => {
  const {onClickEvent} = props;
  const classes = useStyles();
  return (
    <div className={classes.btnContainer}>
      <button onClick={onClickEvent}>240524</button>
    </div>
  );
};

const styles = {
  btnContainer: {
    color: '(24, 24, 24)',
  },
};
const useStyles = createUseStyles(styles);

export default Button24;