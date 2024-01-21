import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "../pages/LoginForm";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import GamePage from "../pages/GamePage";

const RoutePaths = {
    LOGIN: "/login",
    HOME: "/games",
    GAME: "/games/:gameCode",
    NOT_FOUND: "/*",
};

const AppRouter = () => {
    const [isLoggedIn, setLoggedIn] = useState(true); //TODO change it after app is completed

    return (
        <Routes>
            <Route
                path={RoutePaths.LOGIN}
                element={
                    isLoggedIn ? (
                        <Navigate to={RoutePaths.HOME} />
                    ) : (
                        <LoginForm setLoggedIn={setLoggedIn} />
                    )
                }
            />
            <Route
                path={RoutePaths.HOME}
                element={
                    isLoggedIn ? (
                        <HomePage setLoggedIn={setLoggedIn} />
                    ) : (
                        <Navigate to={RoutePaths.LOGIN} />
                    )
                }
            />
            <Route path={RoutePaths.GAME} element={<GamePage />} />
            <Route path={RoutePaths.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
    );
};

export { RoutePaths, AppRouter };
