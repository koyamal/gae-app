import React, { useState } from 'react';
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";

import Modal from '../molecules/Modal';
import ImageUploader from '../molecules/ImageUploader';

import User from '../../types/User';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

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
    !userName && tmpErrMsg.push("Nameを入力してください。");
    !userAge && tmpErrMsg.push("Ageを入力してください。");

    if(isDetail) {
      !userCountry && tmpErrMsg.push("Countryを入力してください。");
      !userGender && tmpErrMsg.push("Genderを入力してください。");
      !userJob && tmpErrMsg.push("Jobを入力してください。");
      !userEmail && tmpErrMsg.push("Emailを入力してください。");
      !image && tmpErrMsg.push("画像を登録してください。");
    }

    changeBase64toFile(image);

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

  const changeBase64toFile = (image: any) => {
    console.log("before")
    console.log(image);
  }

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
      <Input label='hello' onChangeEvent={(e) => {console.log(e)}} />
      <div>
        <Input
          label='Name'
          type="text"
          onChangeEvent={setUserName}
        />
      </div>
      <div>
        <Input
          label='Age'
          type="number"
          onChangeEvent={setUserAge}     
        />
      </div>
      <div>
        <Button onClickEvent={onClickDetailButton}>{isDetail? "詳細を削除":"詳細を追加"}</Button>
        {isDetail && (
          <div>
            <div>
              <Input
                label='country'
                type="text"
                onChangeEvent={setUserCountry}
              />
            </div>
            <div>
              <Input
                label='job'
                type="text"
                onChangeEvent={setUserJob}
              />
            </div>
            <div>
              <Input
                label='gender'
                type="text"
                onChangeEvent={setUserGender}
              />
            </div>
            <div>
              <Input
                label='email'
                type="text"
                onChangeEvent={setUserEmail}
              />
            </div>
            <ImageUploader setImage={setImage} setImage64={setImage64}></ImageUploader>
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
};
const useStyles = createUseStyles(styles);

export default UserAdd;
