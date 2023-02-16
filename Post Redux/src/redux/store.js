import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice.js";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
