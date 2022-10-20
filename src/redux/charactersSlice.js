import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
export const fetchCharacters = createAsyncThunk("/characters/getCharacters", async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=1&offset=0`)
    return res.data
    
})

const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: []
    },
    reducers: {},
    extraReducers: {
        [fetchCharacters.fulfilled]: (state, action) => {
            // action.payload.splice(2,1)
            state.items = action.payload

        }

    },


})





export default charactersSlice.reducer