import React from 'react';
import "./Header.css"
import Logo from "components/generic/Logo/Logo";
import {cn} from "utils/bem-config";
import NavBar from "components/generic/NavBar/NavBar";
import Title from "components/generic/Title/Title";


enum TitleValue {
    title = 'Главная',
    search = "Поиск"
}

const Header = () => {
    const header = cn("header");
    return (
        <header className={header()}>
            <div className={header("wrapper")}>
                <Title TitleValue={TitleValue.title}/>
                <Logo/>
            </div>
            <NavBar/>
        </header>
    );
};

export default Header;