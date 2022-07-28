import React from 'react';
import "./Main.css";
import Card from "components/generic/Card/Card";
import {cn} from "utils/bem-config";
import {useTypedSelector} from "hooks/redux";


const Main = () => {
    const {sortedCocktails} = useTypedSelector(state => state.pub)
    const main = cn("main");
    const cardList = cn("cardList");
    return (
        <main className={main()}>
            <div className={cardList()}>
                {sortedCocktails.map(item => (
                    <div className={cardList("item")}>
                        <Card cardDataItem={item}/>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Main;

