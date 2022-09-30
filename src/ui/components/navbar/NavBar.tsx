
import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
  return (
    <header className="header">
		<h1 className="logo"><Link
          className='navbar-link'
          to='home'>
            CleverpyApp
          </Link></h1>
      <ul className="main-nav">
        <li>
          <Link
            className='navbar-link'
            to='about'>
              About
            </Link>
        </li>
          
      </ul>
	</header> 
  )
}
