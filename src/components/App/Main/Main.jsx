import React from 'react';
import "./Main.css";
import Card from "components/generic/Card/Card";
import {cn} from "utils/bem-config";
import {useTypedSelector} from "hooks/redux";
import Spiner from "../../generic/Spiner/Spiner";


const Main = () => {
    const {sortedCategory,sortCocktails, isLoading} = useTypedSelector(state => state.pub)
    const main = cn("main");
    const cardList = cn("cardList");
    return (
        <main className={main()}>
            {isLoading && <Spiner/>}
            <div className={cardList()}>
                {sortedCategory.filter(item=>item.title.toLowerCase().includes(sortCocktails)).map(item => (
                    <div className={cardList("item")}>
                        <Card cardDataItem={item}/>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Main;

