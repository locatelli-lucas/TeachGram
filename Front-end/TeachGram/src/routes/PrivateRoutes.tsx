import React, {useContext} from "react";
import {Navigate} from "react-router-dom";
import {userContext} from "../contexts";

interface Props {
    children?: React.ReactNode;
}

export function PrivateRoutes({children}: Props) {
    const {isAuthenticated} = useContext(userContext)

    return isAuthenticated ? children : <Navigate to="/" />;
}