import React, { useEffect, useState } from 'react';
import { createUseStyles } from "react-jss";

type User = {
  age: number;
  name: string;
};

const UserInfo: React.FC = () => {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState<User[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/firestore/get");
        const json: React.SetStateAction<User[] | null> = await res.json();
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
    {userInfo?.map((user) => (
        <div className={classes.userBox} key={user.name}>
          <div className={classes.name}>{user.name}</div>
          <div className={classes.age}>{user.age}</div>
        </div>
      )
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
    border:"none",
    fontWeight: "bold",
    fontSize: "20px"
  },
  ageTitle: {
    width: "10%",
    padding: "10px 20px",
    background: "#f0e68c",
    border:"solid #f5deb3",
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
    border:"none"
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

export default UserInfo;
