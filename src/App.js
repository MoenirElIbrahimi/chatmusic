import './App.css';
import { useEffect ,useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import './Connectie.js'; // Make sure this file exports the necessary connection to Firestore
import { db } from './Connectie.js';

function App() {
  const [getUsersList, setUsersList] = useState([]);
  const UsersCollectionRef = collection(db, "Users");
  const name = [];

  useEffect(() => {
    const getUsersList = async () => {
      const data = await getDocs(UsersCollectionRef);
      setUsersList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getUsersList();
  }, [])
  
  getUsersList.forEach((el)=>{
      name.push(<h3 className='Username'>{el.Username}</h3>)
  })

 console.log(name)
  return (
    <div className="App">
      { name }
    </div>
  );
}

export default App;