import React from 'react';
import {Title} from "../components/common/Title";
import {useLocation} from "react-router-dom";

const TitleContainer = () => {
    const location = useLocation()
    const titleValue = {
        "/IRLIX-PUB/": "Главная",
        "/IRLIX-PUB/favorites": "Избранное",
        "/IRLIX-PUB/search": "Поиск"
    }
    const getDate = () => {
        const month = new Date().toLocaleString("ru-RU", {day: 'numeric', month: 'long', year: 'numeric'});
        return month.split(" ").slice(0, 3).join(" ");
    }
    return <Title
        titleValue={titleValue[location.pathname]}
        date={getDate()}
    />

};

export default TitleContainer;