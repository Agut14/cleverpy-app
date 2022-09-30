import './SideBar.scss'
import { FaSearch } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const SideBar = () => {
  return (
    <aside className="nav_cont">
      <ul className="nav">

      <div className='nav-group'>
          <span><AiFillHome className='icons'/></span>
          <li className="nav_items ">
          <span><NavLink to='/home'> Inicio </NavLink></span>
          </li>
        </div>

        <div className='nav-group'>
          <span><FaSearch className='icons'/></span>
          <li className="nav_items ">
            <span><NavLink to='/buscar'> Buscar </NavLink></span>
          </li>
        </div>
          
        <div className='nav-group'>
          <span><FaComment className='icons'/></span>
          <li className="nav_items ">
          <span><NavLink to='/comentarios'> Comentarios </NavLink></span>
          </li>
        </div>

    </ul>
</aside>
  )
}
