import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {searchCocktails} from "../store/pub/pub.slice";
import {Footer} from "../components/Footer";

const FooterContainer = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState("");

    const handleChange = (e) => {
        setState(e.currentTarget.value);
        dispatch(searchCocktails(e.currentTarget.value));
    };

    return <Footer
        fieldValue={state}
        handleChange={handleChange}
    />
};

export default FooterContainer;