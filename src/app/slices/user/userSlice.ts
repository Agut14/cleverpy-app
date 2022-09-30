import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersResponse } from '../../../interfaces/userInterface';

const initialUserState: UsersResponse = {
    users: [],
    isLoadingUsers: false
};

  export const userSlice = createSlice({
      name: 'users',
      initialState: initialUserState,
      reducers: {
        setLoadingUsers: (state) => {
            state.isLoadingUsers = true
        },
        setUsers: ( state, action: PayloadAction<UsersResponse>) => {
          state.users = action.payload.users;
          state.isLoadingUsers = action.payload.isLoadingUsers;
        }
          
     }
});

export const { setUsers, setLoadingUsers } = userSlice.actions;