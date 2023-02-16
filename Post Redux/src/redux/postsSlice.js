import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"; // Esta vaina es para autogenerar un id

const initialState = {
  posts: [
    {
      id: uuidv4(),
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg", 
      title: "Post 1",
      description: "Post 1 en redux",
    },
  ],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // Funtion add posts
    addPost: (state, action) => {
      state.posts.push({ ...action.payload, id: uuidv4() });
    },
    //  Funtion delete posts
    delPost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    // Funtion update posts
    putPost: (state, action) => {
      console.log(action.payload);

      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
  },
});

export const { addPost, delPost, putPost } = postSlice.actions;
export default postSlice.reducer;
