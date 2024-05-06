import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUseStyles } from "react-jss";

import User from '../../types/User';

const UserAdd: React.FC = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [userName, setUserName] = useState<String>("");
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
        <input type="number" />
      </div>
      <div>
        <button onClick={() => {
          console.log(userName);
        }}>登録</button>
      </div>
    </div>
  )
};

const styles = {
};
const useStyles = createUseStyles(styles);

export default UserAdd;
