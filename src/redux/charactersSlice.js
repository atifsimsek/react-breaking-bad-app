import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const char = 12
let removeSkyler = 13
export const fetchCharacters = createAsyncThunk("/characters/getCharacters", async (page) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${removeSkyler}&offset=${page * char}`)
    return res.data

})



const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        isLoading: false,
        page: 0,
        status: "idle",
        hasNextPage: true

    },
    reducers: {
        updatePage: (state, action) => {
            state.page = action.payload + 1

        }
    },
    extraReducers: {
        [fetchCharacters.pending]: (state, action) => {
            state.isLoading = true;

        },


        [fetchCharacters.fulfilled]: (state, action) => {
            state.isLoading = true;
            if (removeSkyler === 13) { removeSkyler = removeSkyler - 1 }
            state.status = "succeeded"
            const filtredCharacters = action.payload.filter(character => character.name !== "Skyler White")
            state.items = [...state.items, ...filtredCharacters]
            state.page += 1

            if (action.payload.length < 12) { state.hasNextPage = false }


        },




    },


})





export default charactersSlice.reducer
