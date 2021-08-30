import React from 'react';
import { Route, Redirect } from 'react-router-dom';



const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const userLocal = JSON.parse(localStorage.getItem('user'));
    
    return (
        <Route {...rest} render={props => (
         userLocal && restricted ?
                <Redirect to="/home" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;