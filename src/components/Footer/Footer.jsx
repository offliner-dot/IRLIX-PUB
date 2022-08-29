import React from 'react';
import "./Footer.scss";
import {cn} from "utils/bem-config";
import {useLocation} from "react-router-dom";
import {FooterButton} from "components/common/FooterButton";
import {SearchInput} from "components/common/SearchInput";
import {SearchIcon} from "components/common/SearchIcon";

export const Footer = ({handleChange, fieldValue}) => {
    const footer = cn("footer");
    const location = useLocation();

    const contentMapper = {
        "/IRLIX-PUB/": () => (
            <>
                <FooterButton btnValue="Избранное" linkValue="/IRLIX-PUB/favorites"/>
                <SearchIcon/>
            </>
        )
        ,
        "/IRLIX-PUB/favorites": () =>
            (
                <>
                    <FooterButton btnValue="Назад" linkValue="/IRLIX-PUB/"/>
                    <SearchIcon/>
                </>
            )
        ,
        "/IRLIX-PUB/search": () => <SearchInput handleChange={handleChange} fieldValue={fieldValue}/>
        ,
    }
    return (
        <footer className={footer()}>
            <div className={footer("wrapper")}>
                {contentMapper[location.pathname]()}
            </div>
        </footer>
    );
};

