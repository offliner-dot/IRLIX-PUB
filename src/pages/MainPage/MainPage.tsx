import React from 'react';
import {Header} from "components/Header";
import {Footer} from "components/Footer";
import {Main} from "components/Main";

export const MainPage = () => {
    return (
        <div className={"container"}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};

