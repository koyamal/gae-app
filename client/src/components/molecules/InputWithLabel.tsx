import React from 'react';
import { createUseStyles } from "react-jss";

import Input from '../atoms/Input';

interface Props {
  onChangeEvent:(event: any) => void;
  label: string;
  type?: string;
  placeholder?: string;
}

const InputWithLabel: React.FC<Props> = (props) => {
  const {onChangeEvent, label, type="text", placeholder=""} = props;
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      <div className={classes.labelBody}>{label}:</div>
      <Input
        type={type}
        placeholder={placeholder}
        onChangeEvent={onChangeEvent}
      />
    </div>
  );
};

const styles = {
  inputContainer: {
    padding: "15px 0px 15px 10px"
  },
  labelBody: {
    marginBottom: "5px"
  }
};
const useStyles = createUseStyles(styles);

export default InputWithLabel;