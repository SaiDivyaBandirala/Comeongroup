import React, { useEffect } from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from "prop-types";
import "./GameList.css";

const GamesList = ({ games, query, selectedCategory }) => {
    const filterResultsByQuery = (games, query, selectedCategory) => {
        return games.filter((game) => {
            const includesQuery =
                query.trim().toLowerCase() === "" ||
                game.code.toLowerCase().includes(query?.toLowerCase());
            const matchesCategory =
                selectedCategory === 0 ||
                game.categoryIds.includes(selectedCategory);
            return includesQuery && matchesCategory;
        });
    };
    const filteredGames = filterResultsByQuery(
        games,
        query || "",
        selectedCategory
    );

    return (
        <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ marginTop: "10rem" }}
        >
            {filteredGames.map((game) => (
                <Grid item key={game.code} xs={12} sm={6} md={4} lg={4}>
                    <Card
                        className="game-card"
                        sx={{ height: "300px", maxHeight: "300px" }}
                    >
                        <CardMedia
                            component="img"
                            image={require(`../assets/${game.icon}`)}
                            alt={game.name}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                        <div className="overlay">
                            <CardContent>
                                <Typography
                                    variant="h4"
                                    textAlign="center"
                                    component="div"
                                >
                                    {game.name}
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

GamesList.propTypes = {
    games: PropTypes.array.isRequired,
    selectedCategory: PropTypes.number.isRequired,
    query: PropTypes.string.isRequired,
};

export default GamesList;
