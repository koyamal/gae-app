import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import UserInfo from "./components/pages/UserInfo";
import OneUserInfo from "./components/pages/OneUserInfo";
import UserAdd from "./components/pages/UserAdd";
import MyDrawer from "./components/molecules/MyDrawer";
import { BarContext } from "./components/context/bar";
import UseBarContext from "./components/context/useBarContext";
import AnotherUseBarContext from "./components/context/anotherUseBarContext";
import BarProvider from "./components/context/BarProvider";

const App: React.FC = () => {
  const [bar, setBar] = useState<string| null>(null);
  const changeBar = (val: string) => {
    setBar(val);
  }
  return (
    <BarProvider>
      <BrowserRouter>
        <div className="App">
          <MyDrawer />
          <UseBarContext />
          <AnotherUseBarContext />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserInfo />} />
          <Route path="/oneuserinfo/:docId" element={<OneUserInfo />} />
          <Route path="/addUser" element={<UserAdd />} />
        </Routes>
      </BrowserRouter>
    </BarProvider>
    // <BarContext.Provider value={{bar, changeBar}}>
    //   <BrowserRouter>
    //     <div className="App">
    //       <MyDrawer />
    //       <UseBarContext />
    //       <AnotherUseBarContext />
    //     </div>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/user" element={<UserInfo />} />
    //       <Route path="/oneuserinfo/:docId" element={<OneUserInfo />} />
    //       <Route path="/addUser" element={<UserAdd />} />
    //     </Routes>
    //   </BrowserRouter>
    // </BarContext.Provider>
    // <UserInfo />
  );
};

export default App;
