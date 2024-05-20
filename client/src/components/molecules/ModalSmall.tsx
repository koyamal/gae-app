import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  titleMsg: string;
  msgList: string[];
  onClickFunc: () => void;
}

const ModalSmall: React.FC<Props> = (props) => {
  const {titleMsg, msgList, onClickFunc} = props;
  const classes = useStyles();
  return (
    <div className={classes.overlay}>
      <div className={classes.content}>
        <p>{titleMsg}</p>
        {
          msgList.map((msg, index) => (<div key={index}>{msg}</div>))
        }
        <p><button onClick={onClickFunc}>OK</button></p>
      </div>
    </div>
  );
};

const styles = {
  content: {
    zIndex:"2",
    width:"30%",
    padding: "1em",
    background:"#83ccd2",
  },
  overlay: {
    position:"fixed",
    top:"0",
    left:"0",
    width:"100%",
    height:"100%",
    backgroundColor:"rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
const useStyles = createUseStyles(styles);

export default ModalSmall;