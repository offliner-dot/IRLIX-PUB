import React, {useEffect} from 'react';
import "./App.css";
import {MainPage} from "pages/MainPage";
import {Route, Routes} from "react-router-dom";
import {getAll} from "store/pub/pub.api";
import {useDispatch} from "react-redux";
import {CardPage} from "../../pages/CardPage";

export const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(getAll())
    }, [dispatch])

    return (
        <>
            <Routes>
                <Route path="/IRLIX-PUB" element={<MainPage/>}/>
                <Route path="/IRLIX-PUB/:id" element={<CardPage/>}/>
            </Routes>
        </>
    )
}

