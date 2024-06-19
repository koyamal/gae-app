import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUseStyles } from "react-jss";

import User from '../../types/User';
import Modal from '../molecules/Modal';

const UserInfo: React.FC = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState<User[] | null>(null);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [deleteDocId, setDeleteDocId] = useState<string>("");
  const fetchData = async () => {
    try {
      const res = await fetch("/firestore/get");
      const json: React.SetStateAction<User[] | null> = await res.json();
      setUserInfo(json);
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
  const onClickDeleteButton = (docId: string) => {
    setDeleteDocId(docId);
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
  }

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
  }
  return (
    <div className="container">
    <h1>User Info.</h1>
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
            <button className={classes.detailBtn} onClick={() => {onClickDeleteButton(user.docId);}}>削除</button>
          </div>
        </div>
      )
    )}
    {deleteModal && (
      <Modal
        titleMsg='確認'
        msgList={["ユーザーを削除しますか？"]}
        onClickFunc={onClickDeleteModalOkButton}
        onClickSecondFunc={onClickDeleteModalNoButton}
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
};
const useStyles = createUseStyles(styles);

export default UserInfo;
