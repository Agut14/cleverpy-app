import React from "react";
import { createContext } from "react";
import { AuthState } from "../interfaces/authState";

type AuthContextProps = {
    authState: AuthState,
    authLogin: ( username: string ) => void,
    authLogout: () => void
}


export const AuthContext = createContext({} as AuthContextProps);