import React from 'react';
import style from "./Header.module.css"
import Logo from "../../generic/Logo/Logo";

const Header = () => {
    const getDate = () => {
        const month = new Date().toLocaleString("ru-RU", {day: 'numeric', month: 'long', year: 'numeric'});
        return month.split(" ").slice(0, 3).join(" ");
    }
    return (
        <header className={style.header}>
            <div className={style.header__info}>
                <h1 className={style.header__title}>Главная</h1>
                <h2 className={style.header__subTitle}>{getDate()}</h2>
            </div>
            <Logo/>
        </header>
    );
};

export default Header;