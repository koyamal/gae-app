import React, { useEffect, useState } from 'react';
import { createUseStyles } from "react-jss";

type User = {
  age: number;
  name: string;
};

const OneUserInfo: React.FC = () => {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState<User | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docId = "pOchZhko2fwMSDE3tqLx";
        const res = await fetch(`/get/userinfo/${docId}`);
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
        <div className={classes.userBox} key={userInfo.name}>
          <div className={classes.name}>{userInfo.name}</div>
          <div className={classes.age}>{userInfo.age}</div>
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
  }
};
const useStyles = createUseStyles(styles);

export default OneUserInfo;
