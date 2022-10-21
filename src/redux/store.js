import { configureStore } from "@reduxjs/toolkit"
import charactersSlice from "./charactersSlice"
import quoteSlice from "./quotesSlice"





export const store = configureStore({
    reducer: {
        characters: charactersSlice,
        quotes: quoteSlice 
    }
})
