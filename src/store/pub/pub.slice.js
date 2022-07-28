import {createSlice} from "@reduxjs/toolkit";
import {getAll} from "./pub.api";


const initialState = {
    count: null,
    cocktails: [],
    categories: [],
    isLoading: false,
    error: null,
    selectedCategory: "",
    sortedCategory: [],
    sortCocktails: ""
};


export const pubSlice = createSlice({
    name: "pub",
    initialState,
    reducers: {
        selectCategory(state, action) {
            state.selectedCategory = action.payload;
            state.sortedCategory = state.cocktails.filter(item => item.description.includes(state.selectedCategory));
        },
        sortCocktails(state, action) {
            // if (action.payload) {
            //     state.sortCocktails = state.sortedCategory.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
            // }
            state.sortCocktails = action.payload.toLowerCase();
        }
    },
    extraReducers: {
        [getAll.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [getAll.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.categories = [...state.categories, ...action.payload[1].categories];
            state.cocktails = action.payload[2].cocktails;
            state.count = action.payload[0].count;
            state.sortedCategory = state.cocktails.filter(item => item.description.includes(state.categories[0]));
        },
        [getAll.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }
    }
});

export const {selectCategory, sortCocktails} = pubSlice.actions;
export const pubReducer = pubSlice.reducer;

