import React from 'react';
import logoSrc from "assets/img/logo/header_logo.svg";
import {cn} from "utils/bem-config";

export const Logo = () => {
    const logo = cn("logo")
    return (
        <div className={logo()}>
            <a href="https://irlix.com/" target={"_blank"} title={"IRLIX.com"} rel="noreferrer">
                <img className={logo("img")} src={logoSrc} alt="логотип IRLIX"/>
            </a>
        </div>
    );
};

