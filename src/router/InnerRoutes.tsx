import { Route, Routes } from "react-router-dom"
import { SearchPage } from "../app/pages/SearchPage"
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
            <Route path='buscar' element={<SearchPage />}/>
            <Route path='edit/:id' element={<EditPage />}/>

            <Route path='/' element={<HomePage />}/>
        </Routes>
        </>
    )
}