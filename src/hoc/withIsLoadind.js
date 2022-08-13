import React from 'react';
import {useTypedSelector} from "hooks/useTypedSelector";
import {Spiner} from "components/common/Spiner";


const withIsLoading = (Component) => {
    return (props) => {
        const {isLoading} = useTypedSelector(state => state.pub);
        if (isLoading) return <Spiner/>
        return <Component {...props}/>;
    };
};

export default withIsLoading;