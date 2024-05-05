import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUseStyles } from "react-jss";

import User from '../../types/User';

const UserAdd: React.FC = () => {
  return (
    <div className="container">
      <div>
        Name:
        <input type="text" />
      </div>
      <div>
        Age:
        <input type="number" />
      </div>
      <div>
        <button>登録</button>
      </div>
    </div>
  )
};

const styles = {
};
const useStyles = createUseStyles(styles);

export default UserAdd;
