import React, {useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {selectCategory} from "../store/pub/pub.slice";
import {NavBar} from "../components/NavBar";

const NavBarContainer = () => {
    const categories = useTypedSelector(state => state.pub.categories)
    const [active, setActive] = useState(categories[0]);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        setActive(e.currentTarget.outerText)
        dispatch(selectCategory(e.currentTarget.outerText))
    };

    return <NavBar
        categories={categories}
        handleClick={handleClick}
        activeCategory={active}
    />
};

export default NavBarContainer;