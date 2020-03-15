import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Here what we do is we check if the user is authenticated. If not we redirect them to login page
export default ({
    component: Component,
    ...rest
}) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const userType = useSelector(state => state.auth.userType)

    return (
        <Route {...rest} component={(props) => (
            isAuthenticated && userType == 'committee' ? (
                <div>
                    <Component {...props} />
                </div>
            ) : (
                    <Redirect to="/" exact={true} />
                )
        )} />
    )
}
