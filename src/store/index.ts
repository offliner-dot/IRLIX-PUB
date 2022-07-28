import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {pubReducer} from "./pub/pub.slice";

const rootReducer = combineReducers({
    pub: pubReducer
})
export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;