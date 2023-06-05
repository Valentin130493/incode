import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {routes} from "../../router/routes";
import {useNavigate} from "react-router";

import "./style.scss"

export const ErrorPage = () => {
    const navigate = useNavigate()
    const toHome = () => {
        navigate(routes.home)
    }
    return (
        <div className={"error_page"} >
            <Typography variant="h1">Oops!</Typography>
            <Typography variant="h4" gutterBottom>
                Something went wrong.
            </Typography>
            <Button color="primary" onClick={toHome}>
                Go back to homepage
            </Button>
        </div>
    );
};

