import React, { useState } from 'react';
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";

import Modal from '../molecules/Modal';
import ImageUploader from '../molecules/ImageUploader';

import User from '../../types/User';
import Button from '../atoms/Button';
import InputWithLabel from '../molecules/InputWithLabel';

const UserAdd: React.FC = () => {
  const classes = useStyles();
  const navigation = useNavigate()

  const [isModal, setIsModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'error'|'done'| ''>('');
  const [userName, setUserName] = useState<string>("");
  const [userAge, setUserAge] = useState<number>(NaN);
  const [userCountry, setUserCountry] = useState<string>("");
  const [userGender, setUserGender] = useState<string>("");
  const [userJob, setUserJob] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [isDetail, setIsDetail] = useState<boolean>(false);
  const [msgInfo, setMsgInfo] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string[]>([]);
  const [image, setImage] = useState<File>();
  const [image64, setImage64] = useState<string>("");

  const onClickSubmitButton = async () => {
    const tmpErrMsg: Array<string> =[];
    !userName && tmpErrMsg.push("名前を入力してください。");
    !userAge && tmpErrMsg.push("年齢を入力してください。");

    if(isDetail) {
      !userCountry && tmpErrMsg.push("国籍を入力してください。");
      !userGender && tmpErrMsg.push("性別を入力してください。");
      !userJob && tmpErrMsg.push("職業を入力してください。");
      !userEmail && tmpErrMsg.push("メールアドレスを入力してください。");
      !image64 && tmpErrMsg.push("写真を登録してください。");
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
      ...(isDetail && {
        detailInfo: {
          imageUrl: image64,
          country: userCountry,
          job: userJob,
          gender: userGender,
          email: userEmail,
      }
      })
    };
    console.log(tempUserInfo);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tempUserInfo),
    };
    try{
      const res = await fetch("/add/user", options);
      setMsgInfo("ユーザーを登録しました。");
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
    navigation("/user")
  };

  const onClickDetailButton = (): void => {
    setIsDetail(!isDetail);
  };

  return (
    <div className="container">
      <div className={classes.inputContainer}>
        <InputWithLabel
          label='名前'
          type="text"
          placeholder='名前を入力してください。'
          onChangeEvent={setUserName}
        />
      </div>
      <div className={classes.inputContainer}>
        <InputWithLabel
          label='年齢'
          type="number"
          placeholder='年齢を入力してください。'
          onChangeEvent={setUserAge}     
        />
      </div>
      <div>
        <Button onClickEvent={onClickDetailButton}>{isDetail? "詳細を削除":"詳細を追加"}</Button>
        {isDetail && (
          <div>
            <div className={classes.inputContainer}>
              <InputWithLabel
                label='国籍'
                type="text"
                placeholder='国籍を入力してください。'
                onChangeEvent={setUserCountry}
              />
            </div>
            <div className={classes.inputContainer}>
              <InputWithLabel
                label='仕事'
                type="text"
                placeholder='仕事を入力してください。'
                onChangeEvent={setUserJob}
              />
            </div>
            <div className={classes.inputContainer}>
              <InputWithLabel
                label='性別'
                type="text"
                placeholder='性別を入力してください。'
                onChangeEvent={setUserGender}
              />
            </div>
            <div className={classes.inputContainer}>
              <InputWithLabel
                label='メールアドレス'
                type="text"
                placeholder='xxxx@example.com'
                onChangeEvent={setUserEmail}
              />
            </div>
            <div className={classes.inputContainer}>
              <div>写真:</div>
              <ImageUploader setImage={setImage} setImage64={setImage64}></ImageUploader>
            </div>
          </div>
        )}
      </div>
      <div>
        <Button onClickEvent={onClickSubmitButton}>登録</Button>
      </div>
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
  inputContainer: {
    padding: "15px 0px 15px 10px"
  }
};
const useStyles = createUseStyles(styles);

export default UserAdd;
