import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const pubApi = {
    getAllCards: createAsyncThunk(
        "pub/getAll",
        async () => {
            return (await axios
                .get("https://62df0e3e976ae7460be734e0.mockapi.io/pub/cocktails")).data
        }
    ),
    getOneCard: createAsyncThunk(
        "pub/getOneCard",
        async (id) => {
            return (await axios
                .get(`https://62df0e3e976ae7460be734e0.mockapi.io/pub/card/${id}`)).data
        }
    )
}