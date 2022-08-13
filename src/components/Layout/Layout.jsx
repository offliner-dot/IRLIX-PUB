import React from 'react';
import {Header} from "components/Header";
import FooterContainer from "containers/FooterContainer";

export const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <FooterContainer/>
        </>
    );
};

