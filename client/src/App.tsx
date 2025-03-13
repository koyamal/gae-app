import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import UserInfo from "./components/pages/UserInfo";
import OneUserInfo from "./components/pages/OneUserInfo";
import UserAdd from "./components/pages/UserAdd";
import MyDrawer from "./components/molecules/MyDrawer";
import { BarContext } from "./components/context/bar";
import UseBarContext from "./components/context/useBarContext";

const App: React.FC = () => {
  return (
    <BarContext.Provider value={null}>
      <BrowserRouter>
        <div className="App">
          <MyDrawer />
          <UseBarContext />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserInfo />} />
          <Route path="/oneuserinfo/:docId" element={<OneUserInfo />} />
          <Route path="/addUser" element={<UserAdd />} />
        </Routes>
      </BrowserRouter>
    </BarContext.Provider>
    // <UserInfo />
  );
};

export default App;
