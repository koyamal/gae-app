import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  onClickEvent:() => void;
}

const Button26: React.FC<Props> = (props) => {
  const {onClickEvent} = props;
  const classes = useStyles();
  return (
    <div className={classes.btnContainer}>
      <button onClick={onClickEvent}>240526</button>
    </div>
  );
};

const styles = {
  btnContainer: {
    color: '(26, 26, 26)',
  },
};
const useStyles = createUseStyles(styles);

export default Button26;