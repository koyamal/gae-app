import React from 'react';
import { createUseStyles } from "react-jss";

import Input from '../atoms/Input';

interface Props {
  onChangeEvent:(event: any) => void;
  label: string;
  type?: string;
}

const InputWithLabel: React.FC<Props> = (props) => {
  const {onChangeEvent, label, type="text"} = props;
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      {label}:
      <Input
        type={type}
        onChangeEvent={onChangeEvent}
      />
    </div>
  );
};

const styles = {
  inputContainer: {
  },
};
const useStyles = createUseStyles(styles);

export default InputWithLabel;