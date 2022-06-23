import React, {FC} from 'react';
import "./Main.css";
import Card from "../../generic/Card/Card";
import {cn} from "../../../utils/bem-config";
import {CardData} from "../../../types/cardData";

type PropsType = {
    cardData: CardData[]
};
const Main: FC<PropsType> = ({cardData}) => {
    const main = cn("main");
    return (
        <main className={main()}>
            <div className={main("cardList")}>
                {cardData.map(item => (
                    <Card cardDataItem={item}
                    />
                ))}
                {/*<Card/>*/}
                {/*<Card/>*/}
                {/*<Card/>*/}
                {/*<Card/>*/}
                {/*<Card/>*/}
                {/*<Card/>*/}
            </div>
        </main>
    );
};

export default Main;