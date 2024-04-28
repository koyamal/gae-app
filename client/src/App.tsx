import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import UserInfo from "./components/pages/UserInfo";
import OneUserInfo from "./components/pages/OneUserInfo";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/user">UserInfo</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserInfo />} />
        <Route path="/oneuserinfo/:docId" element={<OneUserInfo />} />
      </Routes>
    </BrowserRouter>
    // <UserInfo />
  );
};

export default App;
