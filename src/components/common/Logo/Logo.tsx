import React from 'react';
import style from "./Logo.module.css";
import logo from "../../../assets/img/logo/header_logo.svg";

export const Logo = () => {
    return (
        <div className={style.logo}>
            <a href="https://irlix.com/" target={"_blank"} title={"IRLIX.com"} rel="noreferrer">
                <img className={style.img} src={logo} alt="логотип IRLIX"/>
            </a>
        </div>
    );
};

