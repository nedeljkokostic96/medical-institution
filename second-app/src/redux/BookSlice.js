import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/";

export const fetchBooks = createAsyncThunk(
  "book/getBooks",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(BASE_URL + "books");

      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  books: [],
  feedback: { message: "", status: "" },
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.feedback.message = "Loading...";
      state.feedback.status = "LOADING";
    },
    [fetchBooks.fulfilled]: (state, { payload }) => {
      state.books = payload;
      state.feedback.message = "Loaded";
      state.feedback.status = "LOADED";
    },
    [fetchBooks.rejected]: (state, { payload }) => {
      state.feedback.message = payload;
      state.feedback.status = "REJECTED";
    },
  },
});

//export const { };

export default bookSlice.reducer;
