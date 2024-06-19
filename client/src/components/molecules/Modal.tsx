import React from 'react';
import { createUseStyles } from "react-jss";

interface Props {
  titleMsg: string;
  msgList: string[];
  onClickFunc: () => void;
  onClickSecondFunc?: () => void;
}

const Modal: React.FC<Props> = (props) => {
  const {titleMsg, msgList, onClickFunc, onClickSecondFunc} = props;
  const classes = useStyles();
  return (
    <div className={classes.overlay}>
      <div className={classes.content}>
        <div>{titleMsg}</div>
        {
          msgList.map((msg, index) => (<div key={index}>{msg}</div>))
        }
        <div className={classes.buttonContainer}>
          <button className={classes.firstButton} onClick={onClickFunc}>OK</button>
          {onClickSecondFunc && (
            <button className={classes.secondButton} onClick={onClickSecondFunc}>NO</button>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  content: {
    zIndex:"2",
    width:"50%",
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
  buttonContainer:{
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
  },
  firstButton: {
    margin: "10px",
    fontSize: "20px",
    background: "#ffffe0",
    borderRadius: "100px",
    border: "solid #f5deb3",
    '&:hover': {
      background: "#fdf5e6",
    },  
  },
  secondButton: {
    margin: "10px",
    fontSize: "20px",
    background: "#ffffe0",
    borderRadius: "100px",
    border: "solid #f5deb3",
    '&:hover': {
      background: "#fdf5e6",
    },
  }
};
const useStyles = createUseStyles(styles);

export default Modal;