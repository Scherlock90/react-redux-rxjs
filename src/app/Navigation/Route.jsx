import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import UserCount from '../UserCount/UserCount';

const exactPathToHome = `/`;
const pathToHome = '/home';
const pathToCount = `/count`;

export default function Routes() {
    return (
      <div>
        <Switch>
          <Route 
            exact
            path={exactPathToHome}
            component={Home}
          />
          <Route
            path={pathToHome}
            component={Home}
          />
          <Route
            path={pathToCount}
            component={UserCount}
          />
        </Switch>
      </div>
    );
}
