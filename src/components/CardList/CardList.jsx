import React from 'react';
import {cn} from "utils/bem-config";
import {Card} from "components/common/Card";
import "./CardList.scss";

export const CardList = ({result, searchValue}) => {
    const cardList = cn("cardList");
    return (
        <div className={cardList()}>
            {(searchValue && !result.length) ? "Ничего не найдено" :
                result.map(item => (
                    <div className={cardList("item")} key={item.id}>
                        <Card cardDataItem={item}/>
                    </div>
                ))}
        </div>
    );
};


