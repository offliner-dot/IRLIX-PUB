import React from 'react';
import {CardList} from "components/CardList";
import {useTypedSelector} from "hooks/useTypedSelector";
import {selectorPub} from "store/pub/pub.slice";

const FavoritesContainer = () => {
    const {favorites, cocktails, selectedCategory} = useTypedSelector(selectorPub);
    const getFavorites = [];
    for (let i = 0; i < favorites.length; i++) {
        cocktails.forEach(item => {
            if (+item.id === favorites[+i]) getFavorites.push(item)
        })
    }
    const sortedFavorites = () => {
        if (selectedCategory) {
            return getFavorites.filter(item => item.description.includes(selectedCategory))
        }
        return getFavorites;
    }
    return <CardList
        result={sortedFavorites()}
    />
};
export default FavoritesContainer;