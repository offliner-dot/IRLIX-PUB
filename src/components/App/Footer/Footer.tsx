import React from 'react';
import "./Footer.css";
import {cn} from "utils/bem-config";

const Footer = () => {
    const footer = cn("footer")
    return (
        <footer className={footer()}>
            <input className={footer("searchInput")} type="text" placeholder="Поиск"/>
        </footer>
    );
};

export default Footer;