import React from 'react';
import {useDispatch} from "react-redux";
import {searchCocktails, selectorPub} from "store/pub/pub.slice";
import {Footer} from "components/Footer";
import {useTypedSelector} from "hooks/useTypedSelector";

const FooterContainer = () => {
    const dispatch = useDispatch();
    const {searchValue} = useTypedSelector(selectorPub);
    const handleChange = (e) => {
        dispatch(searchCocktails(e.currentTarget.value));
    };

    return <Footer
        fieldValue={searchValue}
        handleChange={handleChange}
    />
};

export default FooterContainer;