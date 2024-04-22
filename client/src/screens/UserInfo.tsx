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
        <div key={user.name}>
          <h3 className={classes.name}>{user.name}</h3>
          <p className={classes.age}>{user.age}</p>
        </div>
      )
    )}
  </div>
  )
};

const styles = {
  name: {
    padding: "10px 20px",
    background: "#f7df1e",
    textAlign: "center",
    border:"none"
  },
  age: {
    background: "#ffffe0",
  }
};
const useStyles = createUseStyles(styles);

export default UserInfo;
