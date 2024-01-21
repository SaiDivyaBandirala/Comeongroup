import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGameContext } from "../context/GameContext";
import { Button, Container, Grid, Typography } from "@mui/material";

const GamePage = () => {
    const { gameCode } = useParams();
    const { games, selectedGame } = useGameContext();

    useEffect(() => {
        console.log("GamePage", games, selectedGame);
    });
    return (
        <Container>
            <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
                <Grid item sx={{ padding: "0" }} xs={12} md={12}>
                    <img
                        src={require(`../assets/${selectedGame.icon.replace(
                            "images/game-icon",
                            "images/game-header"
                        )}`)}
                        alt={selectedGame.name}
                        width="100%"
                    />
                </Grid>
                <Grid
                    item
                    sx={{ padding: "0", margin: "0 3%" }}
                    xs={12}
                    md={12}
                >
                    <Grid container alignItems="center" justifyContent="center">
                        <Grid item xs={1} lg={1} md={1}></Grid>
                        <Grid
                            item
                            xs={10}
                            lg={10}
                            md={10}
                            sx={{ textAlign: "center" }}
                        >
                            <Typography
                                variant="h4"
                                align="justify"
                                textAlign="center"
                                color="secondary"
                                fontWeight="500"
                            >
                                {selectedGame.name}
                            </Typography>
                            <br />
                            <Typography variant="subtitle1" align="justify">
                                {selectedGame.description}
                            </Typography>

                            <Button
                                variant="contained"
                                color="secondary"
                                alignItems="center"
                                textAlign="center"
                                sx={{ width: "200px", marginTop: "2rem" }}
                            >
                                Play
                            </Button>
                        </Grid>
                        <Grid item xs={1} lg={1} md={1}></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default GamePage;
