import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { PublicRoute } from '../../router/PublicRoute';

export{};

describe('Router works correctly', () => {

    test('not authenicated works shows the proper routes', () => {

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

    test('authenicated get the proper routes', () => {

        const contextValue = {
            logged: true,
            username: 'Carlos'
        }

        render(
            <AuthContext.Provider value={{ authState: contextValue, authLogin: () => {}, authLogout: () => {} }}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute >
                                <h1>Public Route</h1>
                            </PublicRoute>
                        }>
                    </Route>
                        <Route path="home" element={ <h1>Bienvenido {contextValue.username}</h1>}></Route>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( (screen.getByText(`Bienvenido ${contextValue.username}`))).toBeTruthy();
    })

    test('authenicated set the local storage correctly', () => {

        

        const contextValue = {
            logged: true,
            username: 'Carlos'
        }

        render(
            <AuthContext.Provider value={{ authState: contextValue, authLogin: () => {}, authLogout: () => {} }}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute >
                                <h1>Public Route</h1>
                            </PublicRoute>
                        }>
                    </Route>
                        <Route path="home" element={ <h1>Bienvenido {contextValue.username}</h1>}></Route>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
    })
})