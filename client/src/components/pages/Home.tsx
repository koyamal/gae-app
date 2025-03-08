import React, { useEffect, useState } from 'react';
import { createUseStyles } from "react-jss";

import UseUseRef from '../molecules/useUseRef';

const Home: React.FC = () => {
  return (
    <div>
        <h1>Home</h1>
        <UseUseRef></UseUseRef>
    </div>
  );
};

export default Home;
