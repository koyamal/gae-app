import React, { useState, useEffect} from "react";

type User = {
  age: number;
  name: string;
};

const App: React.FC = () => {
  const [userInfo, setUserInfo] = React.useState<User[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/api");
        const json: React.SetStateAction<User[] | null> = await res.json();
        setUserInfo(json);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>User Info</h1>
    </div>
  );
};

export default App;
