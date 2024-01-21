import React, { useState } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import LoginForm from "../pages/LoginForm";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import GamePage from "../pages/GamePage";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../context/AuthContext";

const RoutePaths = {
    HOME: "/",
    LOGIN: "/login",
    GAMES: "/games",
    GAME: "/games/:gameCode",
    NOT_FOUND: "/*",
};

const AppRouter = () => {
    const { loggedIn } = useAuth();
    return (
        <Routes>
            <Route path={RoutePaths.LOGIN} element={<Outlet />}>
                <Route
                    index
                    element={
                        loggedIn ? (
                            <Navigate to={RoutePaths.GAMES} />
                        ) : (
                            <LoginForm />
                        )
                    }
                />
            </Route>

            <Route path="/" element={<Outlet />}>
                <Route
                    index
                    element={
                        loggedIn ? (
                            <Navigate to={RoutePaths.GAMES} />
                        ) : (
                            <LoginForm />
                        )
                    }
                />
                <Route path={RoutePaths.GAMES} element={<ProtectedRoute />}>
                    <Route index element={<HomePage />} />
                    <Route path={RoutePaths.GAME} element={<GamePage />} />
                </Route>
            </Route>
            <Route path={RoutePaths.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
    );
};

export { RoutePaths, AppRouter };
