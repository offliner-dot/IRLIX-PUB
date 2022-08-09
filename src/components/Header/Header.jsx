import React from 'react';
import "./Header.css"
import {Logo} from "components/common/Logo";
import {cn} from "utils/bem-config";
import {Title} from "components/common/Title";
import NavBarContainer from "../../containers/NavBarContainer";


export const Header = () => {
    const header = cn("header");
    return (
        <header className={header()}>
            <div className={header("wrapper")}>
                <Title TitleValue={"Главная"}/>
                <Logo/>
            </div>
            <NavBarContainer/>
        </header>
    );
};

