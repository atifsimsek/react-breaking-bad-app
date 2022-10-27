import { configureStore } from "@reduxjs/toolkit"
import charactersSlice from "./charactersSlice"
import quoteSlice from "./quotesSlice"
import detailSlice from "./detailSlice"





export const store = configureStore({
    reducer: {
        characters: charactersSlice,
        quotes: quoteSlice,
        character: detailSlice
    }
})
