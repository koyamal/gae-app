import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  onClickEvent:() => void;
}

const Button25: React.FC<Props> = (props) => {
  const {onClickEvent} = props;
  const classes = useStyles();
  return (
    <div className={classes.btnContainer}>
      <button onClick={onClickEvent}>240525</button>
    </div>
  );
};

const styles = {
  btnContainer: {
    color: '(25, 25, 25)',
  },
};
const useStyles = createUseStyles(styles);

export default Button25;