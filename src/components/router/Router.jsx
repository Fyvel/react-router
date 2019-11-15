import React from "react";
import { Route, Switch, Redirect, useHistory, useLocation } from "react-router-dom";

import { Home, Profile, SignIn, Admin, Unauthorized } from '..'
import { useAuthContext } from "../../authentication";
import * as Role from "../../authentication/roles";

// wrapper to redirect not authenticated user
const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuthContext()

    return (
        <Route
            {...rest}
            render={({ location }) => user
                ? (children)
                : (<Redirect
                    to={{
                        pathname: "/signin",
                        state: { from: location }
                    }}
                />)}
        />)
}

// wrapper to check specific claims
const AdminRoute = ({ children, claimsRequired, ...rest }) => {
    const { user } = useAuthContext()
    return (
        <Route
            {...rest}
            render={props => {
                return user
                    ? (user.claims || []).find(x => x === claimsRequired)
                        ? (children)
                        : (<Redirect
                            to={{
                                pathname: "/unauthorized",
                                state: { claims: [...user.claims] }
                            }}
                        />)
                    : (<Redirect
                        to={{
                            pathname: "/signin",
                            state: {
                                from: props.location
                            }
                        }}
                    />)
            }}
        />)
}

const Router = () => {
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } }

    return (
        <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/signin">
                <SignIn callback={() => history.replace(from)} />
            </Route>
            <Route path="/unauthorized">
                <Unauthorized />
            </Route>
            <PrivateRoute path="/profile">
                <Profile />
            </PrivateRoute>
            <AdminRoute path="/admin" claimsRequired={Role.GODLIKE}>
                <Admin />
            </AdminRoute>
            <Redirect exact path="/" to="/home" />
        </Switch>
    )
}

export default Router