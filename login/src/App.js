import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import HomeForm from './data/HomeForm'

function App() {
  return (
    <div className = 'App'>
      <HomeForm />
    </div>
  );
}

export default App;