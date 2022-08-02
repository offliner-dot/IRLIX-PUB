import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Cocktail, Response} from "../../types/models";

export const getAll = createAsyncThunk(
    "pub/getAll",
    async function () {
        const {data} = await axios
            .get<Response>("https://62df0e3e976ae7460be734e0.mockapi.io/pub/cocktails")
        return data
    }
);


export const getOne = async (id: string) => {
    const {data} = await axios
        .get<Cocktail>(`https://62df0e3e976ae7460be734e0.mockapi.io/pub/card/${id}`)
    return data
}