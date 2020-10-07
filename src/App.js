import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import LoggedIn from './Components/LoggedIn';

// Context
import {UserContext} from './Context/UserContext'
import {RememberContext} from './Context/RememberContext'

// Composants
import Login from './Components/Login'

function App() {

  const [currentUser, setCurrentUser] = useState()
  const [remember, setRemember] = useState(true)

  return (
    <div className="App">
      <BrowserRouter>
      <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <RememberContext.Provider value={{remember, setRemember}}>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/loggedin'>
            <LoggedIn />
          </Route>
        </Switch>          
        </RememberContext.Provider>
      </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
