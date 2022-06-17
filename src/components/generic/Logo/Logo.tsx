import React from 'react';
import style from "./Logo.module.css";
import logo from "../../../assets/img/logo/header_logo.svg";

const Logo = () => {
    return (
        <div className={style.logo}>
            <img className={style.img} src={logo} alt="Логотип"/>
        </div>
    );
};

export default Logo;