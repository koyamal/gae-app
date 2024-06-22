import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  onChangeEvent:(event: any) => void;
  label: string;
  type?: string;
}

const Input: React.FC<Props> = (props) => {
  const {onChangeEvent, label, type="text"} = props;
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      {label}:
      <input
        type={type}
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