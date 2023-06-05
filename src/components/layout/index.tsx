import React from "react";
import { Navigate } from "react-router-dom";
import {Logo} from "..";
import { routes } from "../../router/routes";
import { useAppSelector } from "../../store/hooks";

import "./style.scss";

type LayoutTypes = {
    children: string | JSX.Element | JSX.Element[];
};

export const Layout: React.FC<LayoutTypes> = ({children}) => {
    const {isAuth} = useAppSelector((state)=>state.user)
    console.log(isAuth)
    if(!isAuth){
        return <Navigate to={routes.login} />
    }
    
    return <div className={"layout"}>
        <Logo padding={48}/>
        {children}</div>;
};
