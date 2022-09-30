import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../app/pages/HomePage'
import { LoginPage } from '../auth/pages/LoginPage'
import { NavBar } from '../ui/components/navbar/NavBar';
import { AboutPage } from '../app/pages/AboutPage';
import { SideBar } from '../ui/components/sidebar/SideBar';
import { BuscarPage } from '../app/pages/BuscarPage';
import { ComentariosPage } from '../app/pages/ComentariosPage';

export const AppRouter = () => {
  return (
    <>
        <NavBar />
        <SideBar />
        
        <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='home' element={<HomePage />}/>
            <Route path='about' element={<AboutPage />}/>
            <Route path='buscar' element={<BuscarPage />}/>
            <Route path='comentarios' element={<ComentariosPage />}/>
        </Routes>
    </>
  )
}
