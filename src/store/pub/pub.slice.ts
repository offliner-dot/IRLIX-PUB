import {Cocktal} from "../../types/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type  InitialState = {
    count: number | null
    cocktails: Cocktal[]
    categories: String[] | []
};
const initialState: InitialState = {
    count : null,
    cocktails: [],
    categories: []
}

export const pubSlice = createSlice({
    name: "pub",
    initialState,
    reducers:{
     getCocktails(state, action: PayloadAction<Cocktal>){
            state.cocktails.push(action.payload)
     }
    }
})

export const pubActions = pubSlice.actions;
export const pubReducer = pubSlice.reducer;