import { useState } from "react";
import LoginScreen from "./Componeten/Login/LoginScreen.jsx";
import Filter from "./Componeten/filter/filter.jsx";


function App() {
  console.log(Filter); 
  return (
    <div className="App">
      <LoginScreen />
       <Filter />
       
    </div>
  );
}

export default App;