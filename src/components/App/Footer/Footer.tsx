import React, {useEffect, useState} from 'react';
import style from "./Footer.module.css";
import search from "../../../assets/img/logo/search.svg";

const Footer = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);

    return (
        <footer className={style.footer}>
            {width < 768 ?
                <input className={style.footer__searchInput} type="text" placeholder="Поиск"/>
                :
                <div className={style.footer__large}>
                    <button className={style.footer__favorites}>Избранные</button>
                    <span className={style.footer__search}><img src={search} alt="иконка поиска"/></span>
                </div>
            }
        </footer>
    );

};

export default Footer;