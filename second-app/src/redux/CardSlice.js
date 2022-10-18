import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/";

export const confirmPurchase = createAsyncThunk(
  "card/confirmPurchase",
  async (payload, thunkAPI) => {
    try {
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  booksForPurchase: [],
  feedback: { message: "", status: "" },
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addBookToCart: (state, { payload }) => {
      if (!state.booksForPurchase) state.booksForPurchase = [];
      state.booksForPurchase.push(payload);
    },
    removeBookFromCart: (state, { payload }) => {
      state.booksForPurchase = state.booksForPurchase.filter(
        (book) => book.id !== payload.id
      );
    },
  },
  extraReducers: {},
});

export const { addBookToCart, removeBookFromCart } = cardSlice.actions;

export default cardSlice.reducer;
