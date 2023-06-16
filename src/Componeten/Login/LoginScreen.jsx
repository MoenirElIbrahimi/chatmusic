import React from 'react';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function Login() {

  const [token, setToken] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  async function loginUser(cred) {
    return fetch ('http://localhost:3000/login', {
      method: 'POST',
      headers:{
        'content-Type': 'application/json'
      },
      body: JSON.stringify(cred)
    })
    .then(data => data.json())
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    })
    setToken(token);
  }
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password"  onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}



export default Login;