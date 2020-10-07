import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import LoggedIn from './Components/LoggedIn';

// Composants
import Login from './Components/Login'
import ResetPassword from './Components/ResetPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
