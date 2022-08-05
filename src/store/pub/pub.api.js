import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const pubApi = {
    getAllCards: createAsyncThunk(
        "pub/getAll",
        async function () {
            const {data} = await axios
                .get("https://62df0e3e976ae7460be734e0.mockapi.io/pub/cocktails")
            return data
        }
    ),
    getOneCard: async (id) => {
        const {data} = await axios
            .get(`https://62df0e3e976ae7460be734e0.mockapi.io/pub/card/${id}`)
        return data
    }
}