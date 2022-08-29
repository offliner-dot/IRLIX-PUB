import React from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {selectorPub, toggleFavorites} from "../store/pub/pub.slice";
import {Bookmark} from "../components/common/Bookmark";

const BookmarkContainer = ({id}) => {
    const dispatch = useDispatch();
    const {favorites} = useTypedSelector(selectorPub);
    const followUnfollwFavorites = () => {
        dispatch(toggleFavorites(id))
    }
    return <Bookmark
        followUnfollwFavorites={followUnfollwFavorites}
        isFavorites={favorites.includes(Number(id))}
    />
};

export default BookmarkContainer;