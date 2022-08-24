import React from 'react';
import {Main} from "components/Main";
import "./MainPage.scss";
import {BaseLayout} from "layout/Layout";

export const MainPage = () => {
    return (
        <BaseLayout>
            <Main/>
        </BaseLayout>
    );
};

