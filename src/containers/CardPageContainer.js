import React, {useEffect} from 'react';
import {CardPage} from "pages/CardPage";
import {useTypedSelector} from "hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import {pubApi} from "store/pub/pub.api";
import {useDispatch} from "react-redux";
import withIsLoading from "hoc/withIsLoadind";

const CardPageContainer = () => {
    const {card} = useTypedSelector(state => state.pub)
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pubApi.getOneCard(id));
    }, [dispatch, id])

    return <WithIsLoadingCardPage
        data={card}
    />
};
const WithIsLoadingCardPage = withIsLoading(CardPage)
export default CardPageContainer;