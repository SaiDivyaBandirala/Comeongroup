import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppRouter } from "./utils/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { GameProvider } from "./context/GameContext";

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
                <GameProvider>
                    <AppRouter></AppRouter>
                </GameProvider>
            </ThemeProvider>
        </Router>
    );
}

export default App;
