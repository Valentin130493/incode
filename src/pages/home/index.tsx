import React from "react";
import {useNavigate} from "react-router";
import {routes} from "../../router/routes";
import useAuth from "../../hooks/useAuth";

import congrat from "../../assets/images/png/Congrat.png"
import image1 from "../../assets/images/png/Image.png"

import "./style.scss"


export const HomePage = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
        navigate(routes.login)
    }
    return <main>
        <section className={"home"}>
            <img src={congrat} alt={"congrat"}/>
            <h3>Now you are on the main page. Soon we will provide you with detailed feedback on the result of your
                work</h3>
            <button onClick={handleLogOut}>
                Log out
            </button>
            <img src={image1} alt={"some image"}/>
        </section>
    </main>;
};



