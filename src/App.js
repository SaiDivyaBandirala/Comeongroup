import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppRouter } from "./utils/Routes";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
} from "react-router-dom";

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
                <AppRouter></AppRouter>
            </ThemeProvider>
        </Router>
    );
}

export default App;
