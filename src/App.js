import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import LoggedIn from './Components/LoggedIn';

// Context
import {UserContext} from './Context/UserContext'

// Composants
import Login from './Components/Login'
import ResetPassword from './Components/ResetPassword';

function App() {

  const [currentUser, setCurrentUser] = useState()

  return (
    <div className="App">
      <BrowserRouter>
      <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/forgot-password'>
            <ResetPassword />
          </Route>
          <Route exact path='/loggedin'>
            <LoggedIn />
          </Route>
        </Switch>
      </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
