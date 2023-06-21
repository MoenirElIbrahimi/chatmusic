import { useState } from "react";
import LoginScreen from "./Componeten/Login/LoginScreen.jsx";
// import UserList from "./Componeten/Userlist/UserList";

function App() {
  return (
    <div className="App">
      <LoginScreen />
      <input type="text" placeholder='Voer een gebruiker in'/>

    </div>
  );
}

export default App;