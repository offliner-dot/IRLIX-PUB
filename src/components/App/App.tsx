import React from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import {cn} from "../../utils/bem-config";
import "./App.css";
import {CardData} from "../../types/cardData";
import {data} from "../../assets/data";

function App() {
    const container = cn("container");
    const navBarData = ["Новинки", "Сладкое", "Хит", "Крепкие"];
    const cardData: Array<CardData> = data;
    return (
        <div className={container()}>
            <Header navBarData={navBarData}/>
            <Main cardData={cardData}/>
            <Footer/>
        </div>
    )
}

export default App;
