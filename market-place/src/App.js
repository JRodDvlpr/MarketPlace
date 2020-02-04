import React from 'react';
import './App.css';

// Browser Router
import { Route, withRouter } from 'react-router-dom';

// User Login - Sign up Component
import Signup from './components/Signup';
import Login from './components/Login';

//Navigation bar 
import Nav from './components/Nav';



function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' component={Login} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />

      
 
    </div>
  );
}

export default App;
