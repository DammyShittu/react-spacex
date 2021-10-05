import React from 'react';
import { Route, Switch } from 'react-router';
import Nav from './components/Nav';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route exact path="/myprofile">
        <Profile />
      </Route>
      <Route exact path="/">
        <Rockets />
      </Route>
    </Switch>
  </>
);

export default App;
