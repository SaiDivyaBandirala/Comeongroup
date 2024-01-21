import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const SearchGame = ({ query, queryChange }) => {
    return (
        <TextField
            variant="outlined"
            fullWidth
            label="Search by Game Name"
            value={query}
            onChange={(e) => queryChange(e)}
        ></TextField>
    );
};

SearchGame.propTypes = {
    query: PropTypes.string.isRequired,
    queryChange: PropTypes.func.isRequired,
};

export { SearchGame };
