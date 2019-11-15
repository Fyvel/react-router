import React from "react";
import { Route, Switch, Redirect, useHistory, useLocation } from "react-router-dom";

import {
    Home,
    Profile,
    ProfileDetails,
    SignIn,
    Admin,
    Unauthorized,
    SuperAdmin
} from '..'
import { useAuthContext } from "../../authentication";

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
            render={props => user
                ? (user.claims || []).find(x => x.id === claimsRequired)
                    ? (children)
                    : (<Redirect
                        to={{
                            pathname: "/unauthorized",
                        }} />)
                : (<Redirect
                    to={{
                        pathname: "/signin",
                        state: {
                            from: props.location
                        }
                    }}
                />)}
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
            <PrivateRoute path="/unauthorized">
                <Unauthorized />
            </PrivateRoute>
            <PrivateRoute path="/profile">
                <Profile />
                <ProfileDetails />
            </PrivateRoute>
            <AdminRoute path="/admin" claimsRequired={"HERO_ACCESS"}>
                <Admin />
            </AdminRoute>
            <AdminRoute path="/super-admin" claimsRequired={"GODLIKE_ACCESS"}>
                <SuperAdmin />
            </AdminRoute>
            <Redirect exact path="/" to="/home" />
        </Switch>
    )
}

export default Router