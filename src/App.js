import React from 'react';
import { Route, Switch } from 'react-router';
import Nav from './components/Nav';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route exact path="/myprofile">
        <Profile />
      </Route>
      <Route exact path="/missions">
        <Missions />
      </Route>
      <Route exact path="/">
        <Rockets />
      </Route>
    </Switch>
  </>
);

export default App;
