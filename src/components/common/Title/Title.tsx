import React, {FC} from 'react';
import {cn} from "utils/bem-config";
import "./Title.scss";
import {Link} from "react-router-dom";

type PropsType = {
    titleValue: string
    date: string
};
export const Title: FC<PropsType> = ({titleValue, date}) => {
    const info = cn("info");

    return (
        <div className={info("info")}>
            <h1 className={info("title")}>
                <Link className={info("link")} to={"/IRLIX-PUB/"}>
                    {titleValue}
                </Link>
            </h1>
            <h2 className={info("subTitle")}>{date}</h2>
        </div>
    );
}
