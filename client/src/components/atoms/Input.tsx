import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  onChangeEvent:(event: any) => void;
  type?: string;
}

const Input: React.FC<Props> = (props) => {
  const {onChangeEvent, type="text"} = props;
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
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