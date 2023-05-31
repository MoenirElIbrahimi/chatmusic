import './App.css';
import { useEffect ,useState } from 'react';
import "./database/database.js";
import './Connectie.js';
import { getDocs, collection, doc } from 'firebase/firestore';
import { db } from 'firebase/firestore';

function App() {

  const [getUsersList, setUsersList] = useState([]);
  const jobCollectionRef = collection(db, "Users");

  useEffect(()=>{
    const getUsers = async () => {
      const data = await getDocs(jobCollectionRef);
      setUsersList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getUsers();
  },[])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
