import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { post, postResponse } from '../../../interfaces/postInterface';

const initialPostState: postResponse = {
  posts: [],
  isLoading: false
};

  export const postSlice = createSlice({
      name: 'cards',
      initialState: initialPostState,
      reducers: {
        setLoadingPosts: ( state ) => {
          state.isLoading = true;
        },
        setPosts: ( state, action: PayloadAction<postResponse>) => {
          state.posts = action.payload.posts;
          state.isLoading = action.payload.isLoading;
        }
          
     }
});

export const { setPosts, setLoadingPosts } = postSlice.actions;