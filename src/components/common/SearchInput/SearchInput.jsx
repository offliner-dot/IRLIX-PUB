import React from 'react';
import "./SearchInput.scss";
import {cn} from "utils/bem-config";
import close from "assets/img/logo/close.svg";
import {Link} from "react-router-dom";

export const SearchInput = ({fieldValue, handleChange}) => {
    const searchInput = cn("searchInput");
    return (
        <>
            <input className={searchInput()}
                   type="text"
                   placeholder="Поиск"
                   value={fieldValue}
                   onChange={(e) => handleChange(e)}
            />
            <Link className={searchInput("close")} to="/IRLIX-PUB">
                <img src={close} alt="Выход"/>
            </Link>
        </>
    )
};

