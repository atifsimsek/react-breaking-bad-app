import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuotes = createAsyncThunk("/quotes/getQuotes", async () => {
  const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`);
  return res.data;
});

const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    quotes: [],
    status: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchQuotes.pending]: (state, action) => {
      state.status = "loading";
    },

    [fetchQuotes.fulfilled]: (state, action) => {
      state.status = "succeeded";
      const filtredQuotes = action.payload.filter(
        (quote) => quote.author !== "Skyler White"
      );
      state.quotes = filtredQuotes;
    },
    [fetchQuotes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const stateData = (state) => state.quotes.quotes;
export const stateStatus = (state) => state.quotes.status;
export const stateError = (state) => state.quotes.error;

export default quoteSlice.reducer;
