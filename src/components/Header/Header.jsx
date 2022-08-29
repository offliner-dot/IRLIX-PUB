import React from 'react';
import "./Header.scss"
import {Logo} from "components/common/Logo";
import {cn} from "utils/bem-config";
import NavBarContainer from "containers/NavBarContainer";
import TitleContainer from "containers/TitleContainer";


export const Header = () => {
    const header = cn("header");
    return (
        <header className={header()}>
            <div className={header("wrapper")}>
                <TitleContainer/>
                <Logo/>
            </div>
            <NavBarContainer/>
        </header>
    );
};

