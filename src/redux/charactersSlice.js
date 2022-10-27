import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

let char = 12
let removeSkyler = 13
export const fetchCharacters = createAsyncThunk("/characters/getCharacters", async (page) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${removeSkyler}&offset=${page * char}`)
    return res.data

})



const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        page: 0,
        status: "idle",
        hasNextPage: true,
        isLoading: true,
        error: "",
    },
    reducers: {
        updatePage: (state, action) => {
            state.page = action.payload + 1

        }
    },
    extraReducers: {
        [fetchCharacters.pending]: (state, action) => {
            state.status = "loading";

        },


        [fetchCharacters.fulfilled]: (state, action) => {

            if (removeSkyler === 13) { removeSkyler = removeSkyler - 1 }
            if (char === 12) { char = char + 1 }
            
            state.status = "succeeded"
            state.isLoading = false;
            const filtredCharacters = action.payload.filter(character => character.name !== "Skyler White")
            state.items = [...state.items, ...filtredCharacters]
            state.page += 1

            if (action.payload.length < 12) { state.hasNextPage = false }


        },

        [fetchCharacters.rejected]: (state, action) => {
            state.isLoading = false;
            state.status = "failed"

            state.error = action.error.message

        }




    },


})

export const stateData = (state) => state.characters.items
export const statePage = (state) => state.characters.page
export const stateStatus = (state) => state.characters.status
export const stateHasNextPage = (state) => state.characters.hasNextPage
export const stateIsLoading = (state) => state.characters.isLoading
export const stateError = (state) => state.characters.error





export default charactersSlice.reducer
