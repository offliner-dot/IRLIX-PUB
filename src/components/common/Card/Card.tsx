import React, {FC} from 'react';
import "./Card.scss";
import {cn} from "utils/bem-config";
import {Cocktail} from "types/models";

type PropsType = {
    cardDataItem: Cocktail
};
export const Card: FC<PropsType> = (cardDataItem) => {
    const card = cn("card");
    const {title, alcohol, image, description} = cardDataItem.cardDataItem;
    return (
        <div className={card()}>
            <img className={card("background")} src={image} alt="коктейль"/>
            <div className={card("info")}>
                <h2 className={card("title")}>{title}</h2>
                <p className={card("description")}>{description.slice(1).map(item => `${item} `)}</p>
            </div>
            <p className={card("alcohol")}>{alcohol}%<span className={card("size")}>Алкоголь</span></p>
        </div>
    );
};

