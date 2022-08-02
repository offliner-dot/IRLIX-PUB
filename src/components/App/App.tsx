import React, {useEffect} from 'react';
import "./App.css";
import MainPage from "../../pages/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import {getAll} from "../../store/pub/pub.api";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(getAll())
    }, [])

    return (
        <>
            <Routes>
                <Route path="/IRLIX-PUB" element={<MainPage/>}/>
            </Routes>
        </>
    )
}

export default App;
