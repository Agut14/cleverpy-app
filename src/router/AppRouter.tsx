import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../app/pages/HomePage'
import { LoginPage } from '../auth/pages/LoginPage'
import { NavBar } from '../ui/components/navbar/NavBar';
import { AboutPage } from '../app/pages/AboutPage';
import { SideBar } from '../ui/components/sidebar/SideBar';
import { BuscarPage } from '../app/pages/BuscarPage';
import { ComentariosPage } from '../app/pages/ComentariosPage';
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
