import {  useContext } from 'react'
import { TigerPunkContext } from './TigerPunkContext'
import logo from '../assets/Logo/tiger-punk-high-resolution-logo-transparent.png'
import { Link } from 'react-router-dom'




export const NavBar = () => {

  const {navItemSelected, selectNavItem, cart} = useContext(TigerPunkContext)

const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

	return (
			<>
			<nav id="nav-bar">
        <img className='logo-sm' src={logo} alt="Tiger Punk Logo" />
        <ul>
          <li  className={`nav-item ${navItemSelected === 'Home' ? 'selectedNav ': ''}`}>
              <Link to='/' onClick={()=>selectNavItem('Home' )}>Home</Link>
          </li>
          <li  className={`nav-item ${navItemSelected === 'Tour' ? 'selectedNav ': ''}`}>
            <Link to='/TourDates' onClick={()=>selectNavItem('Tour' )}>Tour Dates</Link>
          </li>
          <li className={`nav-item ${navItemSelected === 'Gallery' ? 'selectedNav ': ''}`}>
            <Link to='/Gallery'  onClick={()=>selectNavItem('Gallery' )}>Gallery</Link>
          </li>
          <li className={`nav-item ${navItemSelected === 'Merch' ? 'selectedNav ': ''}`}>
            <Link to='/Merch' onClick={()=>selectNavItem('Merch' )} >Merch</Link>
          </li>
          {cart.length === 0 ? '' : <p id='cart-quantity'>{totalItems}</p>}
          <li className={`nav-item ${navItemSelected === 'Cart' ? 'selectedNav ': ''}`}>
            <Link to='/Cart' onClick={()=>selectNavItem('Cart' )} >Cart</Link>
          </li>
          <li className={`nav-item ${navItemSelected === 'Contacts' ? 'selectedNav ': ''}`}>
            <Link to='/Contacts' onClick={()=>selectNavItem('Contacts' )} >Contacts</Link>
          </li>
        </ul>
      </nav>
	</>

	)
}