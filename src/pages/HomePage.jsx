import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import { fetchCategories, fetchGames } from "../api/Api";
import {
    Alert,
    Container,
    Grid,
    Typography,
    useMediaQuery,
} from "@mui/material";
import GamesList from "../components/GamesList";
import SortCategories from "../components/SortCategories";
import { SearchGame } from "../components/SearchGame";
import { useGameContext } from "../context/GameContext";
const HomePage = ({ setLoggedIn }) => {
    const { setGamesData } = useGameContext();
    const [categories, setCategories] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);
    //Sort related useState
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [query, setQuery] = useState("");
    const isXsScreen = useMediaQuery("(max-width:600px)");
    const handleSearch = (e) => {
        setQuery(e.target.value);
    };
    const handleCategoryChange = (newCategory) => {
        setSelectedCategory(newCategory);
    };

    const fetchData = async () => {
        try {
            fetchGames()
                .then((data) => setGamesData(data))
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
                    <Grid
                        item
                        xs={12}
                        lg={12}
                        textAlign="center"
                        sx={{ marginTop: "2rem" }}
                    >
                        <Typography
                            variant="h4"
                            color="primary"
                            fontWeight="700"
                        >
                            DELIVERING THE GAMES YOU LOVE
                            <br />
                        </Typography>
                        <Typography
                            variant="h4"
                            color="secondary"
                            fontWeight="600"
                        >
                            Where Every Click Sparks Joy!
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                display: isXsScreen ? "none" : "block",
                                padding: "0 150px",
                            }}
                        >
                            Embark on an exhilarating gaming journey with us! We
                            take pride in delivering the games, crafting
                            immersive experiences that go beyond entertainment.
                            Every click on our platform is a gateway to joy,
                            excitement, and endless possibilities. Join us in
                            the thrilling world of gaming, where passion meets
                            innovation. Lets make every gaming moment
                            unforgettable!
                        </Typography>
                    </Grid>
                </Grid>
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                <GamesList
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
