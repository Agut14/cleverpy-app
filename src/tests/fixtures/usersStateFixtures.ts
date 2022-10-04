import { UsersResponse } from "../../interfaces/userInterface";

export const initialUserStateFixture: UsersResponse = {
    users: [],
    isLoadingUsers: false
};

export const initialUserStateWithUsers: UsersResponse = {
    users: [{
        id: 123,
        username:'Carlos',
        name:'Carlos'
    }],
    isLoadingUsers: false
};