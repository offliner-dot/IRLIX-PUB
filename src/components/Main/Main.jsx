import React from 'react';
import "./Main.scss";
import {cn} from "utils/bem-config";
import CardListContainer from "containers/CardListContainer";


export const Main = () => {
    const main = cn("main");
    return (
        <main className={main()}>
            <CardListContainer/>
        </main>);
};



