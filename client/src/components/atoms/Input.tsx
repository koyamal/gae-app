import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  onChangeEvent:(event: any) => void;
}

const Input: React.FC<Props> = (props) => {
  const {onChangeEvent} = props;
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      <input
        onChange={(event) => {onChangeEvent(event.target.value)}}
      />
    </div>
  );
};

const styles = {
  inputContainer: {
  },
};
const useStyles = createUseStyles(styles);

export default Input;