import React from 'react';
import "./Header.css"
import {Logo} from "components/common/Logo";
import {cn} from "utils/bem-config";
import {NavBar} from "components/NavBar";
import {Title} from "components/common/Title";


enum TitleValue {
    title = 'Главная',
    search = "Поиск"
}

export const Header = () => {
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

