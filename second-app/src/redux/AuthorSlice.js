import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/";

export const fetchAuthors = createAsyncThunk(
  "author/getAuthors",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(BASE_URL + "authors");

      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  authors: [],
  feedback: { message: "", status: "" },
};

const authorSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAuthors.pending]: (state) => {
      state.feedback.message = "Loading...";
      state.feedback.status = "LOADING";
    },
    [fetchAuthors.fulfilled]: (state, { payload }) => {
      state.authors = payload;
      state.feedback.message = "Loaded";
      state.feedback.status = "LOADED";
    },
    [fetchAuthors.rejected]: (state, { payload }) => {
      state.feedback.message = payload;
      state.feedback.status = "REJECTED";
    },
  },
});

//export const { };

export default authorSlice.reducer;
