import {configureStore} from "@reduxjs/toolkit";
import {pubSlice} from "./pub/pub.slice";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [pubSlice.reducerPath]: pubSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pubSlice.middleware)
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;