import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUseStyles } from "react-jss";

import User from '../../types/User';

const UserAdd: React.FC = () => {
  const classes = useStyles();

  const [isModal, setIsModal] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [userAge, setUserAge] = useState<number>(NaN);
  const [userCountry, setUserCountry] = useState<string>("");
  const [userGender, setUserGender] = useState<string>("");
  const [userJob, setUserJob] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userImageUrl, setUserImageUrl] = useState<string>("");
  const [isDetail, setIsDetail] = useState<boolean>(false);
  const [msgInfo, setMsgInfo] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string[]>([]);

  const onClickSubmitButton = async () => {
    const tmpErrMsg: Array<string> =[];
    !userName && tmpErrMsg.push("Nameを入力してください。");
    !userAge && tmpErrMsg.push("Ageを入力してください。");

    if(isDetail) {
      !userCountry && tmpErrMsg.push("Countryを入力してください。");
      !userGender && tmpErrMsg.push("Genderを入力してください。");
      !userJob && tmpErrMsg.push("Jobを入力してください。");
      !userEmail && tmpErrMsg.push("Emailを入力してください。");
      // !userImageUrl && tmpErrMsg.push("画像を入力してください。");
    }

    if(tmpErrMsg.length > 0) {
      setIsModal(true);
      setErrMsg(tmpErrMsg);
      return;
    }
    const tempUserInfo: User = {
      docId: '',
      name: userName,
      age: userAge,
    };
    console.log(tempUserInfo);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tempUserInfo),
    };
    try{
      const res = await fetch("/add/user", options);
      const temMsg = await res.json();
      setMsgInfo(temMsg.msg);
    } catch(e) {
      console.log(`error: ${e}`);
    }
  };

  const onClickModalButton = (): void => {
    setIsModal(!isModal);
  };

  const onClickDetailButton = (): void => {
    setIsDetail(!isDetail);
  };

  return (
    <div className="container">
      <div>
        Name:
        <input
          type="text"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
      </div>
      <div>
        Age:
        <input
          type="number"
          onChange={(event) => {
            setUserAge(event.target.valueAsNumber);
          }}     
        />
      </div>
      <p>{userName}{userAge.toString()}</p>
      <div>
        <button onClick={onClickDetailButton}>{isDetail? "詳細を削除":"詳細を追加"}</button>
        {isDetail && (
          <div>
            <div>
              country: 
              <input 
                type="text"
                onChange={(event) => {
                  setUserCountry(event.target.value);
                }}
              />
            </div>
            <div>
              job: 
              <input
                type="text"
                onChange={(event) => {
                  setUserJob(event.target.value);
                }}
              />
            </div>
            <div>
              gender:
              <input
                type="text"
                onChange={(event) => {
                  setUserGender(event.target.value);
                }}
              />
            </div>
            <div>
              email:
              <input
                type="text"
                onChange={(event) => {
                  setUserEmail(event.target.value);
                }}
              />
            </div>
          </div>
        )}
        <p>{isDetail? 'true': 'false'}</p>
      </div>
      <div>
        <button onClick={onClickSubmitButton}>登録</button>
      </div>
      <div>{msgInfo}</div>
      {isModal && (
        <div className={classes.overlay}>
          <div className={classes.content}>
            <p>モーダル</p>
            <p><button onClick={onClickModalButton}>OK</button></p>
          </div>
        </div>
      )}
    </div>
  )
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
};
const useStyles = createUseStyles(styles);

export default UserAdd;
