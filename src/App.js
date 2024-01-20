import React from "react";
import "./App.css";
import LoginForm from "./pages/LoginForm";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
        <ThemeProvider theme={theme}>
            <Header />
            <LoginForm />
        </ThemeProvider>
    );
}

export default App;
