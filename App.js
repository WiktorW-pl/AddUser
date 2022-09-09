import React, { useState } from 'react';

import './App.css';
import Card from "./components/Card"
import UserList from "./components/UserList.js"


function App() {
  const [user, setUser] = useState([])

  const addUserData = userData =>{
    setUser((prevUser) =>{
      return [userData, ...prevUser];
    });
  };

  return (
    <div className="App">
      <Card onAddUserData={addUserData}></Card>
      <UserList items={user}></UserList>
    </div>
  );
}

export default App;
