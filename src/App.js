import { useState } from "react";
import LoginScreen from "./Componeten/Login/LoginScreen.jsx";
import UserList from "./Componeten/Userlist/UserList";

function App() {
  return (
    <div>
      <LoginScreen />
      <UserList />
    </div>
  );
}

export default App;