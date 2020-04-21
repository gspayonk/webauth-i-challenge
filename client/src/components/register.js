import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        password
      });

      if (response.status === 201) {
        history.push('/login');
      }

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Register</h2>
              <input
                id = 'username'
                label = 'username'
                name = 'username'
                type = 'text'
                onChange = {event => setUsername(event.target.value)}
                value = {username}
              />
        </div>
        <div>
              <input
                id = 'password'
                label = 'password'
                name = 'password'
                type = 'password'
                onChange = {event => setPassword(event.target.value)}
                value = {password}
              />
        </div>
        <button>Sign Up</button>
        <p>
          Login <Link to = '/login'>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;