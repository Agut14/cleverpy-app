import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { providerProps } from '../context/AuthProvider';


export const PrivateRoute = ({ children }: providerProps) => {

    const { authState } = useContext( AuthContext )
    const isLogged = authState.logged;

    return (isLogged)
     
        ? <>{children}</>
        : <Navigate to={'/login'}/> 
}
