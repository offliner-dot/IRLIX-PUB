import React from 'react';
import "./FavoritesPage.scss";
import {BaseLayout} from "layout/Layout";
import FavoritesContainer from "containers/FavoritesContainer";

export const FavoritesPage = () => {

    return (
        <BaseLayout>
            <FavoritesContainer/>
        </BaseLayout>
    );
};

