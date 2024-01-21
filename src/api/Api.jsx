const API_BASE_URL = "http://localhost:3001";

const fetchGames = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/games`);
        if (!response.ok) {
            throw new Error("Failed to fetch games");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

const fetchCategories = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/categories`);
        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export { fetchGames, fetchCategories };
