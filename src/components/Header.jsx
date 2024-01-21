import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Avatar,
    useMediaQuery,
} from "@mui/material";
import logo from "../assets/images/Logo.png";
import { useAuth } from "../context/AuthContext";
import { Logout } from "@mui/icons-material";

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { user, logout, setUserData } = useAuth();
    const isXsScreen = useMediaQuery("(max-width:600px)");
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogOut = async () => {
        handleClose();
        try {
            const response = await fetch("http://localhost:3001/logout", {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: user.name.split(" ")[0].toLowerCase(),
                }),
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error("Failed to logout", data.error);
            } else {
                logout();
                setUserData(null);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <div style={{ flexGrow: 1 }}>
                    <img src={logo} loading="lazy" />
                </div>
                <div>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                    >
                        {user && (
                            <>
                                <Typography
                                    sx={{
                                        display: isXsScreen ? "none" : "block",
                                        paddingRight: "5px",
                                    }}
                                >
                                    {`Hi ${user.name.split(" ")[0]} `}
                                </Typography>

                                <Avatar
                                    loading="lazy"
                                    src={require(`../assets/${user.avatar}`)}
                                ></Avatar>
                            </>
                        )}
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        sx={{ marginTop: "2rem", marginLeft: "-2rem" }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleLogOut}>
                            <Logout /> Logout
                        </MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
