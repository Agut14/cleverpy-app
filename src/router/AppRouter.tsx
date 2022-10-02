import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { InnerRoutes } from './InnerRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='login' element={
            <PublicRoute >
              <LoginPage />
            </PublicRoute>
            }/>

            <Route path='/*' element={ 
              <PrivateRoute>
                <InnerRoutes />
              </PrivateRoute>}
            />
        </Routes>
    </>
  )
}
