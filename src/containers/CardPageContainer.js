import React, {useEffect} from 'react';
import {CardPage} from "pages/CardPage";
import {useTypedSelector} from "hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import {pubApi} from "store/pub/pub.api";
import {useDispatch} from "react-redux";
import withIsLoading from "hoc/withIsLoadind";
import {selectorPub} from "store/pub/pub.slice";

const CardPageContainer = () => {
    const {card} = useTypedSelector(selectorPub)
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