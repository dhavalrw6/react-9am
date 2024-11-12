import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

const initialState = {
  posts: [],
  error: null,
  status: "",
};

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (newPost, { rejectWithValue }) => {
    try {
      let res = await apiInstance.post("/.json", newPost);
      console.log(res);
      return { ...newPost, id: res.data.name };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state, action) => {
        state.status = "Loading.";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;
