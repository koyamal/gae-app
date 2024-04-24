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
    {userInfo?.map((user) => (
        <div className={classes.container} key={user.name}>
          <div className={classes.name}>{user.name}</div>
          <div className={classes.age}>{user.age}</div>
        </div>
      )
    )}
  </div>
  )
};

const styles = {
  container: {
    display: "flex",
  },
  name: {
    padding: "10px 20px",
    background: "#f7df1e",
    textAlign: "center",
    border:"none"
  },
  age: {
    padding: "10px 20px",
    background: "#ffffe0",
    border:"solid #f5deb3",
    textAlign: "center"
  }
};
const useStyles = createUseStyles(styles);

export default UserInfo;
