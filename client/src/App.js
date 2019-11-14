import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/login';
import Users from './components/users';
import Register from './components/register';
import PrivateRoute from './components/private-route';

function App() {
  return (
    <div className = 'App'>
      <h1>Cookies Plus More Challenge</h1>

      <BrowserRouter>
        <PrivateRoute exact path = '/' component = {Users} />
        <Route path = '/login' component = {Login} />
        <Route path = '/register' component = {Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;