import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { withSession } from '../Auth0Provider';
import Habits from '../containers/Habits';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={withSession(Habits)} />
        </Switch>
      </Router>
    </>
  );
}
