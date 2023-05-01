import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacter = createAsyncThunk("/character/id", async (id) => {
  const res = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${id}`
  );

  return res.data[0];
});

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    character: {},
    status: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchCharacter.pending]: (state, action) => {
      state.status = "loading";
    },

    [fetchCharacter.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.character = action.payload;
    },
    [fetchCharacter.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const stateCharacter = (state) => state.character.character;
export const stateStatus = (state) => state.character.status;
export const stateError = (state) => state.character.error;

export default detailSlice.reducer;
