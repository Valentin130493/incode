import React from "react";

import "./style.scss";

interface LogoProps {
    padding: number
}

export const Logo: React.FC<LogoProps> = ({padding}) => {
    return (
        <div style={{padding: padding}}>
            <h3 className={"logo_title"}>InCode</h3>
            <p className={"logo_text"}>Finance</p>
        </div>
    );
};
