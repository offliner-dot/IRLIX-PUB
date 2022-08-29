import React from 'react';
import "./SearchPage.scss";
import {BaseLayout} from "layout/Layout";
import SearchPageContainer from "containers/SearchPageContainer";

export const SearchPage = () => {

    return (
        <BaseLayout>
            <SearchPageContainer/>
        </BaseLayout>
    );
};

