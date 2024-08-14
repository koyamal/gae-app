import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  onChangeEvent:(event: any) => void;
  type: string;
  placeholder: string;
  inputRef?: any;
}

const Input: React.FC<Props> = (props) => {
  const {onChangeEvent, type, placeholder, inputRef} = props;
  const classes = useStyles();
  return (
    <input
      className={classes.inputBody}
      type={type}
      placeholder={placeholder}
      onChange={(event) => {onChangeEvent(event.target.value)}}
      ref={inputRef}
    />
  );
};

const styles = {
  inputContainer: {
  },
  inputBody: {
    height: "30px",
    width: "300px",
    fontSize: "15px",
    padding: "5px"
  }
};
const useStyles = createUseStyles(styles);

export default Input;