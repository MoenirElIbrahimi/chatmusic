
import { useEffect ,useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import '../../Connectie.js'; // Make sure this file exports the necessary connection to Firestore
import { db } from '../../Connectie.js';
import './UserList.css';





function UserList() {
  const [getUsersList, setUsersList] = useState([]);
  const UsersCollectionRef = collection(db, "Users");
  const user = [];


  useEffect(() => {
    const getUsersList = async () => {
      const data = await getDocs(UsersCollectionRef);
      setUsersList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getUsersList();
  }, [])

  

  
  getUsersList.forEach((data)=>{
      user.push(<h3 className='Username'>Gebruiker: {data.Username}</h3>)
      user.push(<h3 className='Username'>Wachtwoord: {data.Password}</h3>)
      user.push(<button key={data.id}> Send Friendship </button>)

  })

 
  return (
    <div className="UserList">
      { user }
    </div>
  );
}

export default UserList;

// const [getTitle, setTitle] = useState("");
// const [getTask, setTask] = useState("");
// const [getStatus, setStatus] = useState("");

// const createjob = async () =>{
//     await addDoc(jobCollectRef,
//         {title: getTitle,
//         task: getTask,
//         date: setDate,
//         status: getStatus,
//         author:
//         {name: auth.currentUser.displayName, id: auth.currentUser.uid}
//         });
//         return createjob;
// }