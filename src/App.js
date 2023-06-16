import './App.css';
import LoginScreen from './Componeten/Login/LoginScreen';
import UserList from './Componeten/Userlist/UserList.jsx';

function App(){
  return(
        <div className ="App">
    <UserList></UserList>
    <LoginScreen></LoginScreen>
    </div>
  );

  }

  export default App;