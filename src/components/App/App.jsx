import React from 'react';
import "./App.css";
import {MainPage} from "pages/MainPage";
import {Route, Routes} from "react-router-dom";
import {CardPage} from "../../pages/CardPage";

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/IRLIX-PUB" element={<MainPage/>}/>
                <Route path="/IRLIX-PUB/:id" element={<CardPage/>}/>
            </Routes>
        </>
    )
}

