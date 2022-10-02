import { AuthState } from '../interfaces/authState';
import { authTypes } from '../auth/types';

export const initialStateAuth: AuthState = {
    logged: false,
    username: ''
}

type AuthAction = 
    | { type: 'Auth Login', payload: { username: string, logged?: boolean} }
    | { type: 'Auth Logout', payload: { username: string } }

export const authReducer = (state: AuthState = initialStateAuth, action: AuthAction) => {

    switch(action.type){
        case authTypes.login:
            return {
                ...state,
                logged: true,
                username: action.payload.username
            }
        
        case authTypes.logout:
            return {
                logged: false,
                username: ''
            }
        
        default:
            return state;   
    }
  
}
