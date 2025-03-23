import React, { useEffect, useState } from 'react';
import { createUseStyles } from "react-jss";

import UseUseRef from '../molecules/useUseRef';
import PraUseCallback from '../hooks/useCallback/praUseCallback';
import Parent from '../hooks/useMemo/praUseMemo';
import PraUseEffect from '../hooks/useEffect/praUseEffect';

const Home: React.FC = () => {
  return (
    <div>
        <h1>Home</h1>
        <PraUseCallback></PraUseCallback>
        <UseUseRef></UseUseRef>
        <Parent></Parent>
        <PraUseEffect></PraUseEffect>
    </div>
  );
};

export default Home;
