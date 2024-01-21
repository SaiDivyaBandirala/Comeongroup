import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppRouter } from "./utils/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { GameProvider } from "./context/GameContext";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";

const theme = createTheme({
    palette: {
        primary: {
            main: "#373942",
        },
        secondary: {
            main: "#8EB50D",
        },
    },
});

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    <GameProvider>
                        <Header />
                        <AppRouter></AppRouter>
                    </GameProvider>
                </AuthProvider>
            </ThemeProvider>
        </Router>
    );
}

export default App;
