import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Home, Profile } from '..'

const Router = () => (
    <Switch>
        <Redirect from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
    </Switch>
);

export default Router;