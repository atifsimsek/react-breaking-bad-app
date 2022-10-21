import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const char = 12
export const fetchCharacters = createAsyncThunk("/characters/getCharacters", async (page) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=13&offset=${page * char}`)
    return res.data

})



const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        page: 0,
        status:"idle"

    },
    reducers: {
        updatePage: (state, action) => {
            state.page = action.payload + 1

        }
    },
    extraReducers: {
        [fetchCharacters.fulfilled]: (state, action) => {
            state.status = "succeeded"
            action.payload.splice(2, 1)
            state.items = [...state.items, ...action.payload]
            state.page += 1


        },




    },


})





export default charactersSlice.reducer
