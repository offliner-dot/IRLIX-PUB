import React, {FC} from 'react';
import "./Card.css";
import {cn} from "utils/bem-config";
import {CardData} from "types/cardData";

type PropsType = {
    cardDataItem: CardData
};
const Card: FC<PropsType> = (cardDataItem) => {
    const card = cn("card");
    const {title, alcohol, image, description} = cardDataItem.cardDataItem;
    return (
        <div className={card()}>
            <img className={card("background")} src={image} alt="фон карточки"/>
            <div className={card("info")}>
                <h2 className={card("title")}>{title}</h2>
                <p className={card("description")}>{description}</p>
            </div>
            <p className={card("alcohol")}>{alcohol}%<span className={card("size")}>Алкоголь</span></p>
        </div>
    );
};

export default Card;