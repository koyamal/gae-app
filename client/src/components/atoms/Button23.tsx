import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  onClickEvent:() => void;
}

const Button23: React.FC<Props> = (props) => {
  const {onClickEvent} = props;
  const classes = useStyles();
  return (
    <div className={classes.btnContainer}>
      <button onClick={onClickEvent}>240523</button>
    </div>
  );
};

const styles = {
  btnContainer: {
    color: '(23, 23, 23)',
  },
};
const useStyles = createUseStyles(styles);

export default Button23;