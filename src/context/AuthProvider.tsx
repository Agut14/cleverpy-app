import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer, initialStateAuth } from './authReducer';
import { AuthState } from '../interfaces/authState';

interface providerProps {
    children: JSX.Element | JSX.Element[]
}

const init = (): AuthState => {
    const user = localStorage.getItem('user') ?? '';

    return {
        logged: user.trim().length > 0,
        username: user
    }
}

export const AuthProvider = ({ children }: providerProps) => {

   const [ authState, dispatch ] = useReducer( authReducer, initialStateAuth, init );


   const authLogin = async( username = '' ) => {
        dispatch({ type: 'Auth Login', payload: { username, }})
        localStorage.setItem('user', username);
   }

   const authLogout = async() => {
        localStorage.removeItem('user');
        dispatch({ type: 'Auth Logout', payload: { username: '' }});
   }

    return (
        <AuthContext.Provider value= {{
            authLogout,
            authLogin,
            authState,
            
        }} >
            { children }
        </AuthContext.Provider>    

    )
}