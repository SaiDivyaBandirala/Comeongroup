import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import { fetchCategories, fetchGames } from "../api/Api";
import { Alert, Container, Grid } from "@mui/material";
import GamesList from "../components/GamesList";
import SortCategories from "../components/SortCategories";
import { SearchGame } from "../components/SearchGame";
const HomePage = ({ setLoggedIn }) => {
    const [games, setGames] = useState([]);
    const [categories, setCategories] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);
    //Sort related useState
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [query, setQuery] = useState("");
    const handleSearch = (e) => {
        setQuery(e.target.value);
    };
    const handleCategoryChange = (newCategory) => {
        setSelectedCategory(newCategory);
    };

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
    }, []);

    const handleLogout = () => {
        setLoggedIn(false);
        navigate(RoutePaths.LOGIN);
    };
    return (
        <>
            <Header></Header>
            <Container>
                <Grid container spacing={3} sx={{ marginTop: "5rem" }}>
                    <Grid item xs={12} lg={8}>
                        <SearchGame query={query} queryChange={handleSearch} />
                    </Grid>
                    {categories.length > 0 && (
                        <Grid item xs={12} lg={4}>
                            <SortCategories
                                categories={categories}
                                selectedCategory={selectedCategory}
                                onCategoryChange={handleCategoryChange}
                            />
                        </Grid>
                    )}
                </Grid>
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                <GamesList
                    games={games}
                    query={query}
                    selectedCategory={selectedCategory}
                ></GamesList>
            </Container>
        </>
    );
};
HomePage.propTypes = {
    setLoggedIn: PropTypes.func.isRequired,
};
export default HomePage;
