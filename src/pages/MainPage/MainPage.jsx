import React from 'react';
import {Main} from "components/Main";
import {cn} from "utils/bem-config";
import "./MainPage.scss";
import {Layout} from "components/Layout";

export const MainPage = () => {
    const container = cn("container");
    return (
        <div className={container()}>
            <Layout>
                <Main/>
            </Layout>
        </div>
    );
};

