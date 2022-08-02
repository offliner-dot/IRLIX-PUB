import React from 'react';
import "./Main.css";
import {cn} from "utils/bem-config";
import {useTypedSelector} from "hooks/useTypedSelector";
import {Spiner} from "components/common/Spiner";
import {CardList} from "../CardList";


export const Main = () => {
    const {isLoading} = useTypedSelector(state => state.pub)
    const main = cn("main");
    return (
        <main className={main()}>
            {isLoading && <Spiner/>}
            <CardList/>
        </main>
    );
};



