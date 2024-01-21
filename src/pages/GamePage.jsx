import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGameContext } from "../context/GameContext";

const GamePage = () => {
    const { gameCode } = useParams();
    const { games, selectedGame } = useGameContext();

    useEffect(() => {
        console.log("GamePage", games, selectedGame);
    });
    return (
        <div>
            <h1>Game Page for {gameCode}</h1>
        </div>
    );
};

export default GamePage;
