import './SideBar.scss'
import { FaSearch } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const SideBar = () => {
  return (
    <aside className="nav_cont">
      <ul className="nav">

      <NavLink to='/home'>
        <div className='nav-group'>
            <span><AiFillHome className='icons'/></span>
            <li className="nav_items ">
            <span> Inicio </span>
            </li>
          </div>
        </NavLink>

        <NavLink to='/buscar'>
          <div className='nav-group'>
            <span><FaSearch className='icons'/></span>
            <li className="nav_items ">
              <span> Buscar</span>
            </li>
          </div>
        </NavLink>
        
    </ul>
</aside>
  )
}
