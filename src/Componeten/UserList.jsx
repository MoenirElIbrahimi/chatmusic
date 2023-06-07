
import { useEffect ,useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import '../Connectie.js'; // Make sure this file exports the necessary connection to Firestore
import { db } from '../Connectie.js';





function UserList() {
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
  
  getUsersList.forEach((el)=>{
      name.push(<h3 className='Username'>{el.Username}</h3>)
  })

 console.log(name)
  return (
    <div className="UserList">
      { name }
    </div>
  );
}

export default UserList;