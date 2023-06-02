import './App.css';
import { useEffect ,useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import './Connectie.js'; // Make sure this file exports the necessary connection to Firestore
import { db2 } from './Connectie.js';


function App() {
  const [getUsersList, setUsersList] = useState([]);
  const UsersCollectionRef = collection(db2, "Users");

  useEffect(() => {
    const getUsersList = async () => {
      const data = await getDocs(UsersCollectionRef);
      setUsersList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getUsersList();
  }, []);
  getUsersList.forEach((el)=>{
      console.log(el)
  })


 console.log(  );
  return (
    <div className="App">
      { UsersCollectionRef.type }
    </div>
  );
}

export default App;