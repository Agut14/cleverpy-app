import { Route, Routes } from "react-router-dom"
import { AboutPage } from "../app/pages/AboutPage"
import { BuscarPage } from "../app/pages/BuscarPage"
import { ComentariosPage } from "../app/pages/ComentariosPage"
import { HomePage } from "../app/pages/HomePage"
import { NavBar } from '../ui/components/navbar/NavBar';
import { SideBar } from "../ui/components/sidebar/SideBar"
import { EditPage } from '../app/pages/EditPage';

export const InnerRoutes = () => {
    return (
        <>

        <NavBar />
        <SideBar />
        
        <Routes>
            <Route path='home' element={<HomePage />}/>
            <Route path='about' element={<AboutPage />}/>
            <Route path='buscar' element={<BuscarPage />}/>
            <Route path='comentarios' element={<ComentariosPage />}/>
            <Route path='home/edit/:id' element={<EditPage />}/>

            <Route path='/' element={<HomePage />}/>
        </Routes>
        </>
    )
}