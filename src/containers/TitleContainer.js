import React from 'react';
import {Title} from "../components/common/Title";
import {useLocation} from "react-router-dom";

const TitleContainer = () => {
    const location = useLocation()
    const titleValue = {
        "/IRLIX-PUB": "Главная",
        "/favorites": "Избранное",
        "/search": "Поиск"
    }
    return <Title
        TitleValue={titleValue[location.pathname]}/>

};

export default TitleContainer;