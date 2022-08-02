import {cn} from "utils/bem-config";
import "./Spiner.css";

export const Spiner = () => {
    const loader = cn("loader")
    return <div className={loader()}></div>;
};

