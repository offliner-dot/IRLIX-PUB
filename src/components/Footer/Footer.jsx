import React, {memo} from 'react';
import "./Footer.scss";
import {cn} from "utils/bem-config";

export const Footer = memo(({handleChange, fieldValue}) => {
    const footer = cn("footer");
    return (
        <footer className={footer()}>
            <input className={footer("searchInput")}
                   type="text"
                   placeholder="Поиск"
                   value={fieldValue}
                   onChange={(e) => handleChange(e)}
            />
        </footer>
    );
});

