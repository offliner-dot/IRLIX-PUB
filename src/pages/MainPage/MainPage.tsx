import React from 'react';
import Header from "components/App/Header/Header";
import Footer from "components/App/Footer/Footer";
import Main from "components/App/Main/Main";

const MainPage = () => {

    return (
        <div className={"container"}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default MainPage;