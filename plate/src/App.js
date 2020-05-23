import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
        
      </Switch>
    </div>
  );
}

export default App;
