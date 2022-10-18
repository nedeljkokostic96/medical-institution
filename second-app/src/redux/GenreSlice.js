import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/";

export const fetchGenres = createAsyncThunk(
  "genre/getGenre",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(BASE_URL + "genres");
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  genres: [],
  feedback: { message: "", status: "" },
};

const genreSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGenres.pending]: (state) => {
      state.feedback.message = "Loading...";
      state.feedback.status = "LOADING";
    },
    [fetchGenres.fulfilled]: (state, { payload }) => {
      state.genres = payload;
      state.feedback.message = "Loaded";
      state.feedback.status = "LOADED";
    },
    [fetchGenres.rejected]: (state, { payload }) => {
      state.feedback.message = payload;
      state.feedback.status = "REJECTED";
    },
  },
});

//export const { };

export default genreSlice.reducer;
