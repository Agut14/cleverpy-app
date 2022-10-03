import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postResponse } from '../../../interfaces/postInterface';

const initialPostState: postResponse = {
  posts: [],
  isLoading: false,
  isError: false,
};

  export const postSlice = createSlice({
      name: 'cards',
      initialState: initialPostState,
      reducers: {
        setLoadingPosts: ( state ) => {
          state.isLoading = true;
          state.isError = false;
        },
        stopLoadingPost: ( state ) => {
          state.isLoading = false;
        },
        setPosts: ( state, action: PayloadAction<postResponse>) => {
          state.posts = action.payload.posts;
          state.isLoading = action.payload.isLoading;
          state.isError = false;
        },
        setIsError: (state, action: PayloadAction<string>) => {
          state.isError = true;
          state.errorMsg = action.payload;
        },
        setNoError:( state ) => {
          state.isError = false;
        },
        setPostDeleted: (state, action: PayloadAction<number>) => {
          state.postDeleted = action.payload;
        }
     }
});

export const { setPosts, setLoadingPosts, stopLoadingPost, setIsError, setNoError, setPostDeleted } = postSlice.actions;