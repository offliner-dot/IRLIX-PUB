import React from 'react';
import {cn} from "../../utils/bem-config";
import {Card} from "../common/Card";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import "./CardList.css";
import {Link} from "react-router-dom";

export const CardList = () => {
    const {result, searchValue} = useTypedSelector(state => state.pub);
    const cardList = cn("cardList");

    return (
        <div className={cardList()}>
            {(searchValue && !result.length) ? "Ничего не найдено" :
                result.map(item => (
                    <div className={cardList("item")} key={item.id}>
                        <Link to={`/IRLIX-PUB/${item.id}`}>
                            <Card cardDataItem={item}/>
                        </Link>
                    </div>
                ))}
        </div>
    );
};


