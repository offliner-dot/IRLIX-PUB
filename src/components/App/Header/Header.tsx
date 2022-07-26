import React, {FC} from 'react';
import "./Header.css"
import Logo from "components/generic/Logo/Logo";
import {cn} from "utils/bem-config";
import NavBar from "components/generic/NavBar/NavBar";
import Title from "components/generic/Title/Title";

type PropsType = {
    navBarData: string[]
};

enum TitleValue {
    title = 'Главная',
    search = "Поиск"
}
const Header: FC<PropsType> = ({navBarData}) => {
    const header = cn("header");
    return (
        <header className={header()}>
            <div className={header("wrapper")}>
                <Title TitleValue={TitleValue.title}/>
                <Logo/>
            </div>
            <NavBar navBarData={navBarData}/>
        </header>
    );
};

export default Header;