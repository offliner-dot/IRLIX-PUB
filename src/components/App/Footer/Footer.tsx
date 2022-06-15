import React from 'react';
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <input className={style.footer__searchInput} type="text" placeholder="Поиск"/>
        </footer>
    );
};

export default Footer;