import React from 'react';
import {useTypedSelector} from "hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {selectCategory, selectorPub} from "store/pub/pub.slice";
import {NavBar} from "components/NavBar";

const NavBarContainer = () => {
    const {categories, selectedCategory} = useTypedSelector(selectorPub)
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(selectCategory(e.currentTarget.outerText))
    };

    return <NavBar
        categories={categories}
        handleClick={handleClick}
        activeCategory={selectedCategory}
    />
};

export default NavBarContainer;