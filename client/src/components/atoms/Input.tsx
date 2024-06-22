import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  onChangeEvent:(event: any) => void;
  type: string;
}

const Input: React.FC<Props> = (props) => {
  const {onChangeEvent, type} = props;
  const classes = useStyles();
  return (
    <input
      type={type}
      onChange={(event) => {onChangeEvent(event.target.value)}}
    />
  );
};

const styles = {
  inputContainer: {
  },
};
const useStyles = createUseStyles(styles);

export default Input;