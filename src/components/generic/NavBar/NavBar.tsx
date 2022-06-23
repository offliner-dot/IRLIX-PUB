import React, {FC, useState} from 'react';
import {cn} from "../../../utils/bem-config";
import "./NavBar.css";

type PropsType = {
    navBarData: string[]
};
const NavBar: FC<PropsType> = ({navBarData}) => {
    const [active, setActive] = useState("Новинки")
    const navBar = cn("navBar");
    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        setActive(e.currentTarget.outerText)
    }
    return (
        <ul className={navBar()}>
            {navBarData.map(name => (
                <li className={navBar("item", {active: name === active})}
                    onClick={(e) => handleClick(e)}
                >{name}
                </li>
            ))}
        </ul>
    );
};

export default NavBar;