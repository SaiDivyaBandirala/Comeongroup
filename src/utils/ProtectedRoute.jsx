import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { RoutePaths } from "./Routes";

const ProtectedRoute = () => {
    const { loggedIn } = useAuth();

    return loggedIn ? <Outlet /> : <Navigate to={RoutePaths.LOGIN} />;
};

export default ProtectedRoute;
