import React, {  useReducer } from "react";
import {  Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const [userprofile, setUserProfile] = useReducer();

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    // return userprofile ? <Outlet /> : <Navigate to="/login" />;
    return <div></div>
}

export default PrivateRoute;
