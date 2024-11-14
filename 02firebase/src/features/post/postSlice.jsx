import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

const initialState = {
  posts: [],
  error: null,
  loading: false,
};

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (newPost, { rejectWithValue }) => {
    try {
      let res = apiInstance.post("/.json", newPost);
      return { id: res.data.name, ...newPost };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchPost = createAsyncThunk(
  "posts/fetchPost",
  async (_, { rejectWithValue }) => {
    try {
      let res = await apiInstance.get("/.json");
      console.log(res);
      return Object.keys(res.data).map((key) => ({
        id: key,
        ...res.data[key],
      }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, { rejectWithValue }) => {
    try {
      await apiInstance.delete(`/${id}.json`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deletePost.fulfilled, (state,action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload);
      })
  },
});

export default postSlice.reducer;
