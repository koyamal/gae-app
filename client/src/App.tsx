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
        const res = await fetch("/firestore/get");
        const json: React.SetStateAction<User[] | null> = await res.json();
        setUserInfo(json);
        console.log(json);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>User Info</h1>
      {userInfo?.map((user) => (
          <div key={user.name}>
            <h3>{user.name}</h3>
            <p>{user.age}</p>
          </div>
        )
      )}
    </div>
  );
};

export default App;
