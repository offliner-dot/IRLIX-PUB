import {cn} from "utils/bem-config";
import "./Spiner.css";

const Spiner = () => {
    const loader = cn("loader")
    return <div className={loader()}></div>;
};

export default Spiner;