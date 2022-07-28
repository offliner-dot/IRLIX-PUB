import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Response} from "../../types/models";

export const getAll = createAsyncThunk(
    "pub/getAll",
    async function () {
        const response = await axios
            .get<Response>("https://62df0e3e976ae7460be734e0.mockapi.io/pub/cocktails")
        return response.data
    }
)