import React from 'react';

import UseUseRef from '../molecules/useUseRef';
import PraUseCallback from '../hooks/useCallback/praUseCallback';
import Parent from '../hooks/useMemo/praUseMemo';
import PraUseEffect from '../hooks/useEffect/praUseEffect';
import UseBarContext from '../context/useBarContext';
import AnotherUseBarContext from '../context/anotherUseBarContext';
import Comp1 from '../hooks/useEffect/praMountUnmount';

const Home: React.FC = () => {
  return (
    <div>
        <h1>Home</h1>
        <UseBarContext />
        <AnotherUseBarContext />
        <PraUseCallback></PraUseCallback>
        <UseUseRef></UseUseRef>
        <Parent></Parent>
        <PraUseEffect></PraUseEffect>
        <Comp1></Comp1>
    </div>
  );
};

export default Home;
