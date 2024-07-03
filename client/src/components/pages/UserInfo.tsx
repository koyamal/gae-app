import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUseStyles } from "react-jss";

import User from '../../types/User';
import Modal from '../molecules/Modal';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const UserInfo: React.FC = () => {
  const navigate = useNavigate();
  const inputRefSearch = useRef<HTMLInputElement>(null);
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState<User[] | null>(null);
  const [userInfoOrigin, setUserInfoOrigin] = useState<User[] | null>(null);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [deleteDocId, setDeleteDocId] = useState<string>("");
  const [modalMsg, setModalMsg] = useState<string>("");
  const [serachWord, setSearchWord] = useState<string>("");

  const fetchData = async () => {
    try {
      const res = await fetch("/firestore/get");
      const json: React.SetStateAction<User[] | null> = await res.json();
      setUserInfo(json);
      setUserInfoOrigin(json);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const goUserPage = (docId: string) => {
    navigate(`/oneuserinfo/${docId}`);
  };

  const onClickDeleteButton = (docId: string, userName: string) => {
    setDeleteDocId(docId);
    setModalMsg(`${userName}の情報を削除しますか？`);
    setDeleteModal(true);
  };

  const onClickDeleteModalOkButton = async () => {
    if(deleteDocId) {
      setDeleteModal(false);
      await deleteUser(deleteDocId);
    }
  };

  const onClickDeleteModalNoButton = async () => {
    setDeleteModal(false);
    setDeleteDocId("");
  };

  const deleteUser = async (docId: string) => {
    // todo: 削除ボタンが押された後に本当に削除するか確認モーダルを表示させる。
    try {
      const res = await fetch(`/delete/user/${docId}`);
      const temMsg = await res.json();
      console.log(temMsg);
      setDeleteDocId("");
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  const searchUser = async () => {
    if(!serachWord) {
      setUserInfo(userInfoOrigin);
      return
    }
    const result = userInfoOrigin?.filter((user) => {
      return user.name.includes(serachWord);
    });
    setUserInfo(result || []);
    console.log(result);
  };

  const resetSearch = async () => {
    setUserInfo(userInfoOrigin);
    setSearchWord("");
    if(inputRefSearch.current) {
      inputRefSearch.current.value = '';
    }
  }

  return (
    <div className="container">
    <h1>User Info</h1>
    <div className={classes.searchBox}>
      <Input onChangeEvent={setSearchWord} type="text" placeholder='ユーザー名を入力' inputRef={inputRefSearch}/>
      <Button onClickEvent={searchUser}>検索</Button>
      <Button onClickEvent={resetSearch}>リセット</Button>
    </div>
    <div className={classes.userBox}>
      <div className={classes.nameTitle}>Name</div>
      <div className={classes.ageTitle}>Age</div>
    </div>
    {userInfo?.map((user) => (
        <div className={classes.userBox} key={user.docId}>
          <div className={classes.name}>{user.name}</div>
          <div className={classes.age}>{user.age}</div>
          <div className={classes.btnBox}>
            {user.detailInfo && (<button className={classes.detailBtn} onClick={() => {goUserPage(user.docId);}}>詳細を見る</button>)}
            <button className={classes.detailBtn} onClick={() => {onClickDeleteButton(user.docId, user.name);}}>削除</button>
          </div>
        </div>
      )
    )}
    {deleteModal && (
      <Modal
        titleMsg='確認'
        msgList={[modalMsg]}
        onClickFunc={onClickDeleteModalOkButton}
        onClickSecondFunc={onClickDeleteModalNoButton}
        firstButtonText='削除する'
        secondButtonText='キャンセル'
      ></Modal>
    )}
  </div>
  )
};

const styles = {
  nameTitle: {
    width: "50%",
    padding: "10px 20px",
    background: "#ffa500",
    textAlign: "center",
    border:"solid #ffa500",
    fontWeight: "bold",
    fontSize: "20px"
  },
  ageTitle: {
    width: "10%",
    padding: "10px 20px",
    background: "#ffd700",
    border:"solid #ffd700",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px"
  },
  userBox: {
    display: "flex",
    margin: "10px"
  },
  name: {
    width: "50%",
    padding: "10px 20px",
    background: "#fdf5e6",
    textAlign: "center",
    border:"solid #ffdab9"
  },
  age: {
    width: "10%",
    padding: "10px 20px",
    background: "#ffffe0",
    border: "solid #f5deb3",
    textAlign: "center"
  },
  detailBtn: {
    background: "#ffffe0",
    borderRadius: "100px",
    border: "solid #f5deb3",
    '&:hover': {
      background: "#fdf5e6",
    },
  },
  btnBox: {
    display: "flex",
    alignItems: "center",
    padding: "10px"
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
  }
};
const useStyles = createUseStyles(styles);

export default UserInfo;
