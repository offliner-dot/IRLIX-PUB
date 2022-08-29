import React from 'react';
import {useTypedSelector} from "hooks/useTypedSelector";
import {Spiner} from "components/common/Spiner";
import {selectorPub} from "store/pub/pub.slice";


const withIsLoading = (Component) => {
    return (props) => {
        const {isLoading} = useTypedSelector(selectorPub);
        if (isLoading) return <Spiner/>
        return <Component {...props}/>;
    };
};

export default withIsLoading;