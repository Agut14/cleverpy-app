import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer, initialStateAuth } from './authReducer';
import { authTypes } from '../auth/types';

interface providerProps {
    children: JSX.Element | JSX.Element[]
}

export const AuthProvider = ({ children }: providerProps) => {

   const [ authState, dispatch ] = useReducer( authReducer, initialStateAuth );


   const authLogin = async( username = '' ) => {
    dispatch({ type: 'Auth Login', payload: { username }})
   }

    return (
        <AuthContext.Provider value= {{
            authLogin,
            authState
        }} >
            { children }
        </AuthContext.Provider>    

    )
}