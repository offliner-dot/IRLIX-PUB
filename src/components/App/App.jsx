import React from 'react';
import "./App.scss";
import {MainPage} from "pages/MainPage";
import {Route, Routes} from "react-router-dom";
import CardPageContainer from "containers/CardPageContainer";
import ErrorPage from "pages/ErorrPage/ErrorPage";

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/IRLIX-PUB" element={<MainPage/>}/>
                <Route path="/IRLIX-PUB/:id" element={<CardPageContainer/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </>
    )
}

