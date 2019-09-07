import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { withSession } from '../Auth0Provider';
import CreateHabit from '../containers/CreateHabit';
import DisplayHabits from '../containers/DisplayHabits';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={withSession(CreateHabit)} />
          <Route exact path="/habits" component={withSession(DisplayHabits)} />
        </Switch>
      </Router>
    </>
  );
}
