import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  onChangeEvent:(event: any) => void;
  type: string;
  placeholder: string;
}

const Input: React.FC<Props> = (props) => {
  const {onChangeEvent, type, placeholder} = props;
  const classes = useStyles();
  return (
    <input
      className={classes.inputBody}
      type={type}
      placeholder={placeholder}
      onChange={(event) => {onChangeEvent(event.target.value)}}
    />
  );
};

const styles = {
  inputContainer: {
  },
  inputBody: {
    height: "35px",
    width: "300px",
    fontSize: "20px",
    padding: "5px"
  }
};
const useStyles = createUseStyles(styles);

export default Input;