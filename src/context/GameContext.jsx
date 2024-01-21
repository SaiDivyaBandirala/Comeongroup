import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
const GameContext = createContext();

const GameProvider = ({ children }) => {
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    const setGamesData = (data) => {
        setGames(data);
    };

    const setSelectedGameData = (game) => {
        setSelectedGame(game);
    };
    return (
        <GameContext.Provider
            value={{ games, selectedGame, setGamesData, setSelectedGameData }}
        >
            {children}
        </GameContext.Provider>
    );
};

const useGameContext = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error("Failed to get context");
    }
    return context;
};

GameProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export { GameProvider, useGameContext };
