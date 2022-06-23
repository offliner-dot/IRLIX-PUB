import React, {FC} from 'react';
import "./Header.css"
import Logo from "../../generic/Logo/Logo";
import {cn} from "../../../utils/bem-config";
import NavBar from "../../generic/NavBar/NavBar";

type PropsType = {
    navBarData: string[]
};
const Header: FC<PropsType> = ({navBarData}) => {
    const header = cn("header");
    const getDate = () => {
        const month = new Date().toLocaleString("ru-RU", {day: 'numeric', month: 'long', year: 'numeric'});
        return month.split(" ").slice(0, 3).join(" ");
    }
    return (
        <header className={header()}>
            <div className={header("container")}>
                <div className={header("info")}>
                    <h1 className={header("title")}>Главная</h1>
                    <h2 className={header("subTitle")}>{getDate()}</h2>
                </div>
                <Logo/>
            </div>
            <NavBar navBarData={navBarData}/>
        </header>
    );
};

export default Header;