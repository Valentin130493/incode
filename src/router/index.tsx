import React from "react";
import {createHashRouter} from "react-router-dom";
import {AuthPage, ErrorPage, HomePage} from "../pages";
import {Layout} from "../components";
import {routes} from "./routes";

export const router = createHashRouter([
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
    {
        path: routes.error,
        element: <ErrorPage/>
    }
]);
