import React from 'react';
import {Link} from "react-router-dom";
import {cn} from "utils/bem-config";
import "./CardPage.scss";
import BookmarkContainer from "containers/BookmarkContainer";

export const CardPage = ({data}) => {
    const cardPage = cn("cardPage");

    return (
        <div className="container">
            <div className={cardPage("imageWrapper")}>
                <Link to={"/IRLIX-PUB"}>
                    <div className={cardPage("arrowWrapper")}>
                        <div className={cardPage("arrow")}></div>
                    </div>
                </Link>
                <img className={cardPage("image")} src={data.image} alt="изображение напитка"/>
            </div>
            <div className={cardPage("wrapper")}>
                <h1 className={cardPage("title")}>{data.title}</h1>
                <p className={cardPage("description")}>
                    {data.description?.slice(1).join(" ")}
                </p>
                <h2 className={cardPage("subtitle")}>Ингредиенты</h2>
                <div className={cardPage("description")}>
                    {data.ingredients?.map((item, index) => (<div key={index} className={cardPage("ingredients")}>
                        <span>{item.ingredient}</span><span
                        className={cardPage("emptyPlace")}></span><span
                        className={cardPage("amount")}>{item.amount} {item.unit}</span>
                    </div>))}
                </div>
                <h2 className={cardPage("subtitle")}>Как готовить</h2>
                <ul className={cardPage("description")}>
                    {data.recipe?.map((item, index) => (<li key={index}>
                        {item}
                    </li>))}
                </ul>
                <h2 className={cardPage("subtitle")}>Что рассказать гостю о коктейле <i>{data.title}?</i></h2>
                <p className={cardPage("description")}>{data.info}</p>
                <BookmarkContainer id={data.id}/>
            </div>

        </div>
    );
};

