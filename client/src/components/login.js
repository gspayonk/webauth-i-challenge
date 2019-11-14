import React, { useState} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password
      });

      if (response.status === 200) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        history.push('/');
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
          <h2>Login</h2>
            
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

        <button>Login</button>
        <p>
          Create New Account <Link to = '/register'>Sign Up</Link>
        </p>
    </form>
    </div>
  );
};
export default Login;