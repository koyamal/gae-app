import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUseStyles } from "react-jss";

import User from '../../types/User';

const UserAdd: React.FC = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [userName, setUserName] = useState<String>("");
  const [userAge, setUserAge] = useState<Number>(NaN);

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
        <input
          type="number"
          onChange={(event) => {
            setUserAge(event.target.valueAsNumber);
          }}     
        />
      </div>
      <div>
        <button onClick={() => {
          console.log(userName, userAge);
        }}>登録</button>
      </div>
      <p>{userName}{userAge.toString()}</p>
    </div>
  )
};

const styles = {
};
const useStyles = createUseStyles(styles);

export default UserAdd;
