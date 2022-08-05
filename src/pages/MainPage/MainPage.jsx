import React from 'react';
import {Header} from "components/Header";
import {Main} from "components/Main";
import FooterContainer from "../../containers/FooterContainer";

export const MainPage = () => {
    return (
        <div className={"container"}>
            <Header/>
            <Main/>
            <FooterContainer/>
        </div>
    );
};

