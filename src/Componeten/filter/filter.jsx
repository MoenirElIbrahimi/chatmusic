import React, { useEffect, useState } from 'react';
import { db } from '../../Connectie.js';
import { Doc, getDoc, addDoc, getDocs, collection } from 'firebase/firestore';


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
    user.push(<button  key={data.id}> Send Friendship </button>)

  })
}



function Filter() {

  
  console.log(UserList); 
  return (
    <div className="UserList">
      
      { UserList }
    </div>
  );
}

export default Filter;