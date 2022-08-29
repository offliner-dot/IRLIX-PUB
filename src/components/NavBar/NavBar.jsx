import React from 'react';
import {cn} from "utils/bem-config";
import "./NavBar.scss";


export const NavBar = ({categories, handleClick, activeCategory}) => {
    const navBar = cn("navBar");
    return (
        <ul className={navBar()}>
            {categories?.map((name) => (
                <li key={name} className={navBar("item", {active: name === activeCategory})}
                    onClick={(e) => handleClick(e)}
                >{name}
                </li>
            ))}
        </ul>
    );
};
