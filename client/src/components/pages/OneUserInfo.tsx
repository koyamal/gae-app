import React, { useEffect, useState } from 'react';
import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";

import User from '../../types/User';

const OneUserInfo: React.FC = () => {
  const params = useParams();
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState<User | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/get/userinfo/${params.docId}`);
        const json: React.SetStateAction<User | null> = await res.json();
        setUserInfo(json);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">
    <h1>User Info.</h1>
    <div className={classes.userBox}>
      <div className={classes.nameTitle}>Name</div>
      <div className={classes.ageTitle}>Age</div>
    </div>
    {userInfo && (
        <div className={classes.userBox} key={userInfo.docId}>
          <div className={classes.name}>{userInfo.name}</div>
          <div className={classes.age}>{userInfo.age}</div>
        </div>
    )}
    {userInfo?.detailInfo && (
      <div>
        <div>{userInfo.detailInfo.country}</div>
        <div>{userInfo.detailInfo.gender}</div>
        <div>{userInfo.detailInfo.email}</div>
        <img className={classes.photo} src={userInfo.detailInfo.imageUrl} />
      </div>
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
    border:"solid #f5deb3",
    textAlign: "center"
  },
  photo: {
    width: '200px',
  }
};
const useStyles = createUseStyles(styles);

export default OneUserInfo;
