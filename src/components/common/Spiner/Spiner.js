import {cn} from "utils/bem-config";
import "./Spiner.scss";

export const Spiner = () => {
    const loader = cn("loader")
    return <div className={loader()}></div>;
};

