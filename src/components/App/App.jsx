import React from 'react';
import "./App.scss";
import {MainPage} from "pages/MainPage";
import {Route, Routes} from "react-router-dom";
import CardPageContainer from "containers/CardPageContainer";
import ErrorPage from "pages/ErorrPage/ErrorPage";
import {SearchPage} from "pages/SearchPage";
import {FavoritesPage} from "pages/FavoritesPage";

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/IRLIX-PUB" element={<MainPage/>}/>
                <Route path="/IRLIX-PUB/:id" element={<CardPageContainer/>}/>
                <Route path="/IRLIX-PUB/favorites" element={<FavoritesPage/>}/>
                <Route path="/IRLIX-PUB/search" element={<SearchPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </>
    )
}

