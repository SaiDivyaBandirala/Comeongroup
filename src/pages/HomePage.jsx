import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import { fetchCategories, fetchGames } from "../api/Api";
import { Alert } from "@mui/material";
const HomePage = ({ setLoggedIn }) => {
    const [games, setGames] = useState([]);
    const [categories, setCategories] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);

    const fetchData = async () => {
        try {
            fetchGames()
                .then((data) => setGames(data))
                .catch((error) => setErrorMessage(error));

            fetchCategories()
                .then((data) => setCategories(data))
                .catch((error) => setErrorMessage(error));
        } catch (error) {
            setErrorMessage("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchData();
        console.log(games, categories);
    }, []);

    const handleLogout = () => {
        setLoggedIn(false);
        navigate(RoutePaths.LOGIN);
    };
    return (
        <div>
            <Header></Header>

            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        </div>
    );
};
HomePage.propTypes = {
    setLoggedIn: PropTypes.func.isRequired,
};
export default HomePage;
