import React from "react";
import { useGameContext } from "../context/GameContext";
import { Button, Container, Grid, Typography, IconButton } from "@mui/material";

import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

const GamePage = () => {
    const { selectedGame } = useGameContext();

    const handlePlayClick = () => {
        window.comeon.game.launch(selectedGame.code);
    };

    return (
        <Container>
            <Grid
                container
                spacing={3}
                sx={{
                    marginTop: "2rem",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{ textAlign: "left", marginLeft: "2rem" }}
                >
                    <Link
                        to="/games"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <IconButton
                            sx={{
                                color: "primary",
                                marginLeft: "-12px",
                            }}
                        >
                            <ArrowBack />
                            <Typography>Back</Typography>
                        </IconButton>
                    </Link>
                </Grid>

                <Grid
                    item
                    id="game-launch"
                    sx={{ padding: "0" }}
                    xs={12}
                    md={12}
                    alignItems="center"
                >
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
                                sx={{ width: "200px", marginTop: "2rem" }}
                                onClick={handlePlayClick}
                            >
                                Play
                            </Button>
                        </Grid>
                        <Grid item xs={1} lg={1} md={1}></Grid>
                        <Grid item xs={12} lg={12} md={12}></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default GamePage;
