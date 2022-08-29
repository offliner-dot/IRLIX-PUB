import React from 'react';
import {CardList} from "components/CardList";
import {useTypedSelector} from "hooks/useTypedSelector";
import {selectorPub} from "store/pub/pub.slice";

const SearchPageContainer = () => {
    const {selectedCategory, searchValue, cocktails} = useTypedSelector(selectorPub);


    const getSortedCocktails = () => {
        if (selectedCategory && !searchValue) {
            return cocktails.filter(item => item.description.includes(selectedCategory))
        }
        if (!selectedCategory && searchValue) {
            return cocktails.filter(item => item.title.toLowerCase().includes(searchValue))
        }
        if (selectedCategory && searchValue) {
            return cocktails.filter(item => item.description.includes(selectedCategory))
                .filter(item => item.title.toLowerCase().includes(searchValue))
        }
        return cocktails
    }

    return <CardList
        result={getSortedCocktails()}
        searchValue={searchValue}
    />
};
export default SearchPageContainer;