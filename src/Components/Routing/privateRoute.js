import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
    console.log("Compoenet called")
    const userLocal = JSON.parse(localStorage.getItem('user'));
    return (

        <Route {...rest} render={props => (
        (userLocal)?<Component {...props} />: <Redirect to="/signin" />
        )} />
    );
};

export default PrivateRoute;