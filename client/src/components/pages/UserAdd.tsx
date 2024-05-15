import React, { useState } from 'react';
import { createUseStyles } from "react-jss";
import Modal from '../molecules/Modal';

import User from '../../types/User';

const UserAdd: React.FC = () => {
  const classes = useStyles();

  const [isModal, setIsModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'error'|'done'| ''>('');
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
      setModalType('error');
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
      setMsgInfo("登録しました。");
      setModalType('done');
      setIsModal(true);
    } catch(e) {
      setMsgInfo("エラー：登録に失敗しました。");
      setModalType('done');
      setIsModal(true);
      console.log(`error: ${e}`);
    }
  };

  const onClickModalButton = (): void => {
    setModalType('');
    setIsModal(!isModal);
  };

  const onClickGoUserInfo = (): void => {
    setModalType('');
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
      {isModal && modalType === 'error' && (
        <Modal titleMsg='エラー' msgList={errMsg} onClickFunc={onClickModalButton}></Modal>
      )}
      {isModal && modalType === 'done' && (
        <Modal titleMsg='メッセージ' msgList={[msgInfo]} onClickFunc={onClickGoUserInfo}></Modal>
      )}
    </div>
  )
};

const styles = {
};
const useStyles = createUseStyles(styles);

export default UserAdd;
