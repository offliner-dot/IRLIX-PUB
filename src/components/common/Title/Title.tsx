import React, {FC} from 'react';
import {cn} from "utils/bem-config";
import "./Title.css";
import {Link} from "react-router-dom";

type PropsType = {
    TitleValue: string
};
export const Title: FC<PropsType> = ({TitleValue}) => {
    const info = cn("info");
    const getDate = () => {
        const month = new Date().toLocaleString("ru-RU", {day: 'numeric', month: 'long', year: 'numeric'});
        return month.split(" ").slice(0, 3).join(" ");
    }
    return (
        <div className={info("info")}>
            <h1 className={info("title")}>
                <Link className={info("link")} to={"/IRLIX-PUB"}>
                    {TitleValue}
                </Link>
            </h1>
            <h2 className={info("subTitle")}>{getDate()}</h2>
        </div>
    );
}
