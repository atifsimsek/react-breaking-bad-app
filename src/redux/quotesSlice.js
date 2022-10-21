import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchQuotes = createAsyncThunk("/quotes/getQuotes", async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`)
    return res.data
})


const quoteSlice = createSlice({

    name: "quotes",
    initialState: {
        quotes: []
    },
    reducers: {},
    extraReducers: {

        [fetchQuotes.fulfilled]: (state, action) => {
            const filtredQuotes = action.payload.filter(quote => quote.author !== "Skyler White")
            state.quotes = filtredQuotes

        }


    }



})







export default quoteSlice.reducer