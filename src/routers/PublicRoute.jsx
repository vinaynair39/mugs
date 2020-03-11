import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Here what we do is we check if the user is authenticated.
// If the user is authenticated and he goes to login aur register page, user will be automatically be redirected to the dashboard

export default ({
    component: Component,
    ...rest
}) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const usertype = useSelector(state => state.auth.userType)
    return (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Redirect exact to={usertype=== "secretary" ? "/dashboard": '/mycommittee'}/>
            ) : (
                    <Component {...props} />
                )
        )} />
    );
};