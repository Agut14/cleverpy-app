import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { InnerRoutes } from './InnerRoutes';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='login' element={<LoginPage />}/>
            <Route path='/*' element={<InnerRoutes />}/>
        </Routes>
    </>
  )
}
