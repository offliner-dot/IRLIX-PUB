import {createSlice} from "@reduxjs/toolkit";
import {pubApi} from "./pub.api";


const initialState = {
    cocktails: [],
    categories: [],
    card: "",
    selectedCategory: "",
    searchValue: "",
    error: "",
    isLoading: false,
    favorites: []
};


export const pubSlice = createSlice({
    name: "pub",
    initialState,
    reducers: {
        selectCategory(state, action) {
            state.selectedCategory = action.payload;
        },
        searchCocktails(state, action) {
            state.searchValue = action.payload.toLowerCase();
        },
        toggleFavorites(state, action) {
            const value = +action.payload;
            state.favorites.includes(value) ?
                state.favorites = state.favorites.filter(item => item !== value) :
                state.favorites.push(value);
        }
    },
    extraReducers: {
        [pubApi.getAllCards.pending]: (state) => {
            state.isLoading = true;
            state.error = "";
        },
        [pubApi.getOneCard.pending]: (state) => {
            state.isLoading = true;
            state.error = "";
            state.card = "";
        },
        [pubApi.getAllCards.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.categories = action.payload[1].categories;
            state.cocktails = action.payload[2].cocktails;
        },
        [pubApi.getOneCard.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.card = action.payload
        },
        [pubApi.getAllCards.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        [pubApi.getOneCard.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }
    }
});

export const selectorPub = state => state.pub;
export const {selectCategory, searchCocktails, toggleFavorites} = pubSlice.actions;
export const pubReducer = pubSlice.reducer;

