import React, {memo} from 'react';
import "./Card.scss";
import {cn} from "utils/bem-config";
import {Link} from "react-router-dom";
import BookmarkContainer from "containers/BookmarkContainer";

export const Card = memo(({cardDataItem}) => {
    const card = cn("card");
    const {title, alcohol, image, description, id} = cardDataItem;
    return (
        <div className={card()}>
            <BookmarkContainer id={id}/>
            <Link to={`/IRLIX-PUB/${id}`}>
                <img className={card("background")} src={image} alt="коктейль"/>
                <div className={card("info")}>
                    <h2 className={card("title")}>{title}</h2>
                    <p className={card("description")}>{description.slice(1).map(item => `${item} `)}</p>
                </div>
                <p className={card("alcohol")}>{alcohol}%<span className={card("size")}>Алкоголь</span></p>
            </Link>
        </div>
    );
});

