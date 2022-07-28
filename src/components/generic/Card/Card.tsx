import React, {FC} from 'react';
import "./Card.css";
import {cn} from "utils/bem-config";
import {Cocktal} from "types/models";
import {Link} from "react-router-dom";

type PropsType = {
    cardDataItem: Cocktal
};
const Card: FC<PropsType> = (cardDataItem) => {
    const card = cn("card");
    const {title, alcohol, image, description, info, id, recipe, ingredients} = cardDataItem.cardDataItem;
    return (
        <div className={card()}>
            <img className={card("background")} src={image} alt="фон карточки"/>
            <div className={card("info")}>
                <h2 className={card("title")}>{title}</h2>
                <p className={card("description")}>{description.slice(1).map(item => (
                    <Link to={item}> {item}</Link>
                    // переделать на li
                ))}</p>
            </div>
            <p className={card("alcohol")}>{alcohol}%<span className={card("size")}>Алкоголь</span></p>
        </div>
    );
};

export default Card;