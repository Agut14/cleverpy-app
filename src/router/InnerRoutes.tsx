import { Route, Routes } from "react-router-dom"
import { BuscarPage } from "../app/pages/BuscarPage"
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
            <Route path='buscar' element={<BuscarPage />}/>
            <Route path='edit/:id' element={<EditPage />}/>

            <Route path='/' element={<HomePage />}/>
        </Routes>
        </>
    )
}