import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import UserInfo from "./components/pages/UserInfo";
import OneUserInfo from "./components/pages/OneUserInfo";
import UserAdd from "./components/pages/UserAdd";
import MyDrawer from "./components/molecules/MyDrawer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <MyDrawer />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserInfo />} />
        <Route path="/oneuserinfo/:docId" element={<OneUserInfo />} />
        <Route path="/addUser" element={<UserAdd />} />
      </Routes>
    </BrowserRouter>
    // <UserInfo />
  );
};

export default App;
