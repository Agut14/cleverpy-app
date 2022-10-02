
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css'
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

export const NavBar = () => {

  const { authState, authLogout } = useContext(AuthContext);
  const user = authState.username;

  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', {
      replace: true
      });
    
    authLogout()  
  }

  return (
    <header className="header">
		<h1 className="logo"><Link
          className='navbar-link'
          to='home'>
            CleverpyApp
          </Link></h1>
      <ul className="main-nav">

        { user && <li>
          <span className='navbar-span'>
            Hola{ `, ${user}` }
          </span>
        </li>}

        <li>
          <Link
            className='nav-link'
            to='about'>
              About
          </Link>
        </li>

        <li>
          <span className='navbar-logout'
          onClick={ onLogout }>
            Logout
          </span>
        </li>
          
      </ul>
	</header> 
  )
}
