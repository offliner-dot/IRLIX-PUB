import React, {useState} from 'react';
import "./Footer.css";
import {cn} from "utils/bem-config";
import {useDispatch} from "react-redux";
import {sortCocktails} from "../../../store/pub/pub.slice";

const Footer = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<number | string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.currentTarget.value);
        dispatch(sortCocktails(e.currentTarget.value));
    };
    const footer = cn("footer");
    return (
        <footer className={footer()}>
            <input className={footer("searchInput")}
                   type="text"
                   placeholder="Поиск"
                   value={state}
                   onChange={(e) => handleChange(e)}
            />

        </footer>
    );
};

export default Footer;