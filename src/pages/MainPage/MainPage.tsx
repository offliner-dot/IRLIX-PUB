import React from 'react';
import Header from "components/App/Header/Header";
import Footer from "components/App/Footer/Footer";
import {CardData} from "types/models";
import {data} from "assets/data";
import Main from "components/App/Main/Main";

const MainPage = () => {
    const navBarData = ["Новинки", "Сладкое", "Хит", "Крепкие"];
    const cardData: Array<CardData> = data;
    return (<div className={"container"}>
            <Header navBarData={navBarData}/>
            <Main cardData={cardData}/>
            <Footer/>
        </div>
    );
};

export default MainPage;