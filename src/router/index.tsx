import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {AuthPage, HomePage} from "../pages";
import {Layout} from "../components";
import {routes} from "./routes";

export const router = createBrowserRouter([
    {
        path: routes.login,
        element: <AuthPage/>,
    },
    {
        path: routes.home,
        element: (
            <Layout>
                <HomePage/>
            </Layout>
        ),
    },
]);
