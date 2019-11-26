import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import UserCount from '../UserCount/UserCount';

export default function Routes() {
    return(
        <div>
            <Switch>
                <Route
                    exact path="/"
                    component={Home}
                />
                <Route
                    path="/home"
                    component={Home}
                />
                <Route 
                    path="/user-count" 
                    component={UserCount} 
                />
            </Switch>
        </div>
    )
}
