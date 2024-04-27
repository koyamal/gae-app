import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserInfo from "./screens/UserInfo";
import Home from "./screens/Home";

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
      </Routes>
    </BrowserRouter>
    // <UserInfo />
  );
};

export default App;
