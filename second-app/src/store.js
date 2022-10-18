import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./redux/BookSlice";
import authorReducer from "./redux/AuthorSlice";
import cardReducer from "./redux/CardSlice";
import genreReducer from "./redux/GenreSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    authors: authorReducer,
    card: cardReducer,
    genres: genreReducer,
  },
});
