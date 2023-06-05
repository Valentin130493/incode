import React from "react";
import {LoginForm, RegisterForm} from "./components";

import "./style.scss";

export const AuthPage = () => {
    const [login, setLogin] = React.useState<boolean>(true);

    return (
        <div className={"auth"}>{login ? <LoginForm changeForm={setLogin}/> :
            <RegisterForm changeForm={setLogin}/>}</div>
    );
};
