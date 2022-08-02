import React, {useState} from 'react';
import {cn} from "utils/bem-config";
import "./NavBar.css";
import {useDispatch} from "react-redux";
import {selectCategory} from "store/pub/pub.slice";
import {useTypedSelector} from "hooks/useTypedSelector";


export const NavBar = () => {
    const navBarData: string[] = useTypedSelector(state => state.pub.categories)
    const [active, setActive] = useState(navBarData[0]);
    const dispatch = useDispatch();
    const navBar = cn("navBar");

    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        setActive(e.currentTarget.outerText)
        dispatch(selectCategory(e.currentTarget.outerText))
    };
    return (
        <ul className={navBar()}>
            {navBarData.map((name, index) => (
                <li key={index} className={navBar("item", {active: name === active})}
                    onClick={(e) => handleClick(e)}
                >{name}
                </li>
            ))}
        </ul>
    );
};
