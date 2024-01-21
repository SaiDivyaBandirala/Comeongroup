import React, { useState } from "react";
import {
    Alert,
    Button,
    Card,
    CardHeader,
    Container,
    TextField,
} from "@mui/material";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../utils/Routes";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
    const { login, setUserData } = useAuth();

    const LoginFormModel = {
        formField: {
            userName: { name: "userName", label: "User Name" },
            password: { name: "password", label: "Password" },
        },
    };

    const LoginFormValues = {
        [LoginFormModel.formField.userName.name]: "",
        [LoginFormModel.formField.password.name]: "",
    };

    const LoginFormSchema = Yup.object().shape({
        userName: Yup.string()
            .min(4, "Username should be minimum 4 characters")
            .max(10, "Username cannot exceed 10 characters")
            .required("Username is required"),
        password: Yup.string()
            .min(3, "Password should be minimum 3 characters")
            .max(10, "Password shouldn't exceeed 10 characters")
            .required("Password is required"),
    });
    const [formValues, setFormValues] = useState(LoginFormValues);
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const onLogin = async () => {
        setLoggedIn(true);
        navigate(RoutePaths.GAMES);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await LoginFormSchema.validate(formValues, { abortEarly: false });

            const response = await fetch("http://localhost:3001/login", {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: formValues.userName,
                    password: formValues.password,
                }),
            });
            if (!response.ok) {
                const data = await response.json();
                const errorMessage = data.error || "An error occurred.";
                setErrorMessage(errorMessage);
                setTimeout(() => {
                    setErrorMessage(null);
                }, 3000);
            } else {
                const data = await response.json();
                setFormValues(LoginFormValues);
                login();
                setUserData(data.player);
            }
        } catch (validationErrors) {
            const newErrors = {};

            if (validationErrors?.inner) {
                validationErrors.inner.forEach((error) => {
                    newErrors[error.path] = error.message;
                });
                setErrors(newErrors);
            } else {
                setErrorMessage("Something went wrong, Please try later.");
                setTimeout(() => {
                    setErrorMessage(null);
                }, 5000);
            }
        }
    };

    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Card sx={{ height: "400px", width: "400px" }} elevation={0}>
                <CardHeader title="Login" sx={{ textAlign: "center" }} />
                <form>
                    <TextField
                        fullWidth
                        label={LoginFormModel.formField.userName.label}
                        variant="outlined"
                        margin="normal"
                        name={LoginFormModel.formField.userName.name}
                        value={formValues.userName}
                        onChange={handleChange}
                        error={Boolean(errors.userName)}
                        helperText={errors.userName}
                    />

                    <TextField
                        fullWidth
                        label={LoginFormModel.formField.password.label}
                        variant="outlined"
                        margin="normal"
                        type="password"
                        name={LoginFormModel.formField.password.name}
                        value={formValues.password}
                        onChange={handleChange}
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                    />
                    {errorMessage && (
                        <Alert severity="error">{errorMessage}</Alert>
                    )}

                    <Button
                        type="button"
                        variant="contained"
                        color="secondary"
                        onClick={handleSubmit}
                        fullWidth
                    >
                        Submit
                    </Button>
                </form>
            </Card>
        </Container>
    );
};

export default LoginForm;
