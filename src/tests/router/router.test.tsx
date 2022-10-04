import { getByText, render, screen } from "@testing-library/react";
import { AuthContext } from '../../context/AuthContext';
import { PublicRoute } from '../../router/PublicRoute';

export{};

describe('Router works correctly', () => {

    test('not authenicated', () => {

        const contextValue = {
            logged: false,
            username: ''
        }

        render(
            <AuthContext.Provider value={{ authState: contextValue, authLogin: () => {}, authLogout: () => {} }}>
                <PublicRoute >
                    <h1>Public Route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect( (screen.getByText('Public Route'))).toBeTruthy();
    })

    
    
})