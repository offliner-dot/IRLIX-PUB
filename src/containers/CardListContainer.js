import React, {useCallback, useEffect} from 'react';
import {CardList} from "components/CardList";
import {pubApi} from "store/pub/pub.api";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "hooks/useTypedSelector";
import withIsLoading from "hoc/withIsLoadind";

const CardListContainer = () => {
    const dispatch = useDispatch()
    const {selectedCategory, searchValue, cocktails} = useTypedSelector(state => state.pub);
    useEffect(() => {
        if (cocktails.length === 0) dispatch(pubApi.getAllCards())
    }, [cocktails.length, dispatch]);

    const getSortedCocktails = useCallback(() => {
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
    }, [cocktails, searchValue, selectedCategory]);

    return <WithIsLoadingCardList
        result={getSortedCocktails()}
        searchValue={searchValue}
    />
};
const WithIsLoadingCardList = withIsLoading(CardList)
export default CardListContainer;