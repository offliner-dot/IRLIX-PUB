import React, {useEffect} from 'react';
import {CardList} from "../components/CardList";
import {pubApi} from "../store/pub/pub.api";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";

const CardListContainer = () => {
    const dispatch = useDispatch()
    const {selectedCategory, searchValue, cocktails} = useTypedSelector(state => state.pub);
    useEffect(() => {
        dispatch(pubApi.getAllCards())
    }, [dispatch]);

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

export default CardListContainer;