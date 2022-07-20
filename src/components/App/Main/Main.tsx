import React, {FC} from 'react';
import "./Main.css";
import Card from "components/generic/Card/Card";
import {cn} from "utils/bem-config";
import {CardData} from "types/cardData";

type PropsType = {
    cardData: CardData[]
};
const Main: FC<PropsType> = ({cardData}) => {
    const main = cn("main");
    const cardList = cn("cardList");
    return (
        <main className={main()}>
            <div className={cardList()}>
                {cardData.map(item => (
                    <div className={cardList("item")}>
                        <Card cardDataItem={item}/>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Main;