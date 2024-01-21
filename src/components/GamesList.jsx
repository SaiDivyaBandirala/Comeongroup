import React, { useEffect } from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from "prop-types";
import "./GameList.css";

const GamesList = ({ games, selectedCategory }) => {
    return (
        <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ marginTop: "10rem" }}
        >
            {games.map((game) => (
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
    selectedCategory: PropTypes.string.isRequired,
};

export default GamesList;
