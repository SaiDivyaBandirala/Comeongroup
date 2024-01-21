import React from "react";
import { useParams } from "react-router-dom";

const GamePage = () => {
    const { gameCode } = useParams();

    return (
        <div>
            <h1>Game Page for {gameCode}</h1>
        </div>
    );
};

export default GamePage;
