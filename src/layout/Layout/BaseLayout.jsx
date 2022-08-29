import React from 'react';
import {Header} from "components/Header";
import FooterContainer from "containers/FooterContainer";
import {cn} from "utils/bem-config";
import "./Layout.scss";

export const BaseLayout = ({children}) => {
    const container = cn("container");
    return (
        <div className={container()}>
            <Header/>
            {children}
            <FooterContainer/>
        </div>
    );
};

