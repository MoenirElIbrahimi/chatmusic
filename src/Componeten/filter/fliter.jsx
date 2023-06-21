import React, { useEffect, useState } from 'react';
import { auth } from '../../Connectie.js';


const Fliter = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Fetch data from Firebase once when component mounts
    const fetchData = async () => {
      const UserList = await auth.ref('data').once('value');
      const fetchedUsers = UserList.users.map((UserList) => UserList.toJSON());
      setData(fetchedUsers);
    };
    

    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={filter} onChange={handleFilterChange} />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fliter;