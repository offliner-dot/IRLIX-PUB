import {configureStore} from "@reduxjs/toolkit";
import {pubReducer} from "./pub/pub.slice";


export const store = configureStore({
    reducer: {
        pub: pubReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;