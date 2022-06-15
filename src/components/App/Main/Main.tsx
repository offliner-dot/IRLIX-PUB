import React from 'react';
import style from "./Main.module.css";
import Card from "../../generic/Card/Card";

const Main = () => {
    return (
        <main className={style.main}>
            <div className={style.main__container}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </main>
    );
};

export default Main;