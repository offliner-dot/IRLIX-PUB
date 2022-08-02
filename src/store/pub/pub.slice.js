import {createSlice} from "@reduxjs/toolkit";
import {getAll} from "./pub.api";


const initialState = {
    cocktails: [],
    categories: [],
    sortedCategory: [],
    result: [],
    searchValue: "",
    error: "",
    isLoading: false
};


export const pubSlice = createSlice({
    name: "pub",
    initialState,
    reducers: {
        selectCategory(state, action) {
            state.sortedCategory = state.cocktails.filter(item => item.description.includes(action.payload));
            state.result = state.cocktails.filter(item => item.description.includes(action.payload))
                .filter(item => item.title.toLowerCase().includes(state.searchValue));
        },
        searchCocktails(state, action) {
            const searchValue = action.payload.toLowerCase();
            state.searchValue = searchValue;
            state.result = state.sortedCategory.filter(item => item.title.toLowerCase().includes(searchValue))
        }
    },
    extraReducers: {
        [getAll.pending]: (state) => {
            state.isLoading = true;
            state.error = "";
        },
        [getAll.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.categories = action.payload[1].categories;
            state.cocktails = action.payload[2].cocktails;
            state.result = state.cocktails;
            state.sortedCategory = state.cocktails;
        },
        [getAll.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }
    }
});

export const {selectCategory, searchCocktails} = pubSlice.actions;
export const pubReducer = pubSlice.reducer;

