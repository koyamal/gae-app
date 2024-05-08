import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUseStyles } from "react-jss";

import User from '../../types/User';

const UserAdd: React.FC = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [userName, setUserName] = useState<String>("");
  const [userAge, setUserAge] = useState<Number>(NaN);
  const [isDetail, setIsDetail] = useState<Boolean>(false);

  const onClickDetailButton = (): void => {
    setIsDetail(!isDetail);
  }

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
      <p>{userName}{userAge.toString()}</p>
      <div>
        <button onClick={onClickDetailButton}>{isDetail? "詳細を削除":"詳細を追加"}</button>
        {isDetail && (
          <div>
            <div>
              country: <input type="text" />
            </div>
            <div>
              job: <input type="text" />
            </div>
            <div>
              gender: <input type="text" />
            </div>
            <div>
              email: <input type="text" />
            </div>
          </div>
        )}
        <p>{isDetail? 'true': 'false'}</p>
      </div>
      <div>
        <button onClick={() => {
          console.log(userName, userAge);
        }}>登録</button>
      </div>
    </div>
  )
};

const styles = {
};
const useStyles = createUseStyles(styles);

export default UserAdd;
