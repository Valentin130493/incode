import React from "react";
import {Navigate} from "react-router-dom";
import {Logo} from "..";
import {routes} from "../../router/routes";
import {useAppSelector} from "../../store/hooks";

import "./style.scss";

type LayoutTypes = {
    children: React.ReactNode;
};

export const Layout: React.FC<LayoutTypes> = ({children}) => {
    const {isAuth} = useAppSelector((state) => state.user)

    if (!isAuth) {
        return <Navigate to={routes.login}/>
    }

    return <div className={"layout"}>
        <Logo padding={48}/>
        {children}
    </div>
};
