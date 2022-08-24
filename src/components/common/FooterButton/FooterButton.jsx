import React from 'react';
import "./FooterButton.scss";
import {cn} from "utils/bem-config";
import {Link} from "react-router-dom";

export const FooterButton = ({btnValue, linkValue}) => {
    const footerButton = cn("footerButton");
    return (
        <Link to={linkValue}>
            <button className={footerButton()}>{btnValue}</button>
        </Link>
    )
};

