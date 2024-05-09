import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUseStyles } from "react-jss";

import User from '../../types/User';

const UserAdd: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [userAge, setUserAge] = useState<number>(NaN);
  const [isDetail, setIsDetail] = useState<boolean>(false);
  const [msgInfo, setMsgInfo] = useState<string>("");

  const onClickSubmitButton = async () => {
    const errMsg: Array<string> =[];
    !userName && errMsg.push("Nameを入力してください。");
    !userAge && errMsg.push("Ageを入力してください。");

    if(errMsg.length > 0) {
      console.log(errMsg);
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
      console.log("error");
    }
  }

  const onClickDetailButton = (): void => {
    setIsDetail(!isDetail);
  }

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
              country: <input type="text" />
            </div>
            <div>
              job: <input type="text" />
            </div>
            <div>
              gender: <input type="text" />
            </div>
            <div>
              email: <input type="text" />
            </div>
          </div>
        )}
        <p>{isDetail? 'true': 'false'}</p>
      </div>
      <div>
        <button onClick={onClickSubmitButton}>登録</button>
      </div>
      <div>{msgInfo}</div>
    </div>
  )
};

const styles = {
};
const useStyles = createUseStyles(styles);

export default UserAdd;
