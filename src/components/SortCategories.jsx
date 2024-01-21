import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Grid,
    ListItem,
} from "@mui/material";

const SortCategories = ({ categories, selectedCategory, onCategoryChange }) => {
    const handleCategoryChange = (event) => {
        const newCategory = event.target.value;
        onCategoryChange(newCategory);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="category-filter-label">
                        Select Category
                    </InputLabel>
                    <Select
                        labelId="category-filter-label"
                        id="category-filter"
                        value={selectedCategory}
                        label="Select Category"
                        onChange={handleCategoryChange}
                    >
                        {categories.map((category) => (
                            <MenuItem key={category.id} value={category.id}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

SortCategories.propTypes = {
    categories: PropTypes.array.isRequired,

    selectedCategory: PropTypes.number.isRequired,
    onCategoryChange: PropTypes.func.isRequired,
};

export default SortCategories;
