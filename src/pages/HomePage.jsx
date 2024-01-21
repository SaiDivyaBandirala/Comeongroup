import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
const HomePage = ({ setLoggedIn }) => {
    const handleLogout = () => {
        setLoggedIn(false);
        navigate(RoutePaths.LOGIN);
    };
    return (
        <div>
            <Header></Header>
            <h1>Welcome to the Home Page</h1>
        </div>
    );
};
HomePage.propTypes = {
    setLoggedIn: PropTypes.func.isRequired,
};
export default HomePage;
