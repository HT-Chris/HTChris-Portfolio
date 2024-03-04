import {  useContext, useState } from 'react'
import { TigerPunkContext } from './TigerPunkContext'
import logo from '../assets/Logo/tiger-punk-high-resolution-logo-transparent.png'
import { Link } from 'react-router-dom'




export const NavBar = () => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const mobileMenuHandle = (str:boolean) => {
    setMobileMenuOpen(str)
    
  }

  const {navItemSelected, selectNavItem, cart} = useContext(TigerPunkContext)

const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

	return (
			<>
			<nav id="tiger-nav-bar" className='tiger-punk-app'>
        <img className='logo-sm' src={logo} alt="Tiger Punk Logo" />
        <ul id='tiger-nav-ul'>
          <li  className={`nav-item ${navItemSelected === 'Home' ? 'selectedNav ': ''}`}>
              <Link to='/Tigerpunk' onClick={()=>selectNavItem('Home' )}>Home</Link>
          </li>
          <li  className={`nav-item ${navItemSelected === 'Tour' ? 'selectedNav ': ''}`}>
            <Link to='/Tigerpunk/TourDates' onClick={()=>selectNavItem('Tour' )}>Tour Dates</Link>
          </li>
          <li className={`nav-item ${navItemSelected === 'Gallery' ? 'selectedNav ': ''}`}>
            <Link to='/Tigerpunk/Gallery'  onClick={()=>selectNavItem('Gallery' )}>Gallery</Link>
          </li>
          <li className={`nav-item ${navItemSelected === 'Merch' ? 'selectedNav ': ''}`}>
            <Link to='/Tigerpunk/Merch' onClick={()=>selectNavItem('Merch' )} >Merch</Link>
          </li>
          <li className={`nav-item ${navItemSelected === 'Cart' ? 'selectedNav ': ''}`}>
            <Link to='/Tigerpunk/Cart' onClick={()=>selectNavItem('Cart' )} >Cart</Link>
          {cart.length === 0 ? '' : <p id='cart-quantity'>{totalItems}</p>}
          </li>
          <li className={`nav-item ${navItemSelected === 'Contacts' ? 'selectedNav ': ''}`}>
            <Link to='/Tigerpunk/Contacts' onClick={()=>selectNavItem('Contacts' )} >Contacts</Link>
          </li>
        </ul>

        <button id="tiger-mobile-button" onClick={()=>mobileMenuHandle(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <div id="tiger-nav-mobile" className={`${mobileMenuOpen ? '' : 'hide'}`}>
          <button id="mobile-x" onClick={()=>mobileMenuHandle(false)}>X</button>
          <ul id='tiger-mobile-ul'>
            <li  className={`nav-item ${navItemSelected === 'Home' ? 'selectedNav ': ''}`}>
                <Link to='/Tigerpunk' onClick={()=>selectNavItem('Home' )}>Home</Link>
            </li>
            <li  className={`nav-item ${navItemSelected === 'Tour' ? 'selectedNav ': ''}`}>
              <Link to='/Tigerpunk/TourDates' onClick={()=>selectNavItem('Tour' )}>Tour Dates</Link>
            </li>
            <li className={`nav-item ${navItemSelected === 'Gallery' ? 'selectedNav ': ''}`}>
              <Link to='/Tigerpunk/Gallery'  onClick={()=>selectNavItem('Gallery' )}>Gallery</Link>
            </li>
            <li className={`nav-item ${navItemSelected === 'Merch' ? 'selectedNav ': ''}`}>
              <Link to='/Tigerpunk/Merch' onClick={()=>selectNavItem('Merch' )} >Merch</Link>
            </li>
            <li className={`nav-item ${navItemSelected === 'Cart' ? 'selectedNav ': ''}`}>
              <Link to='/Tigerpunk/Cart' onClick={()=>selectNavItem('Cart' )} >Cart</Link>
            {cart.length === 0 ? '' : <p id='cart-quantity'>{totalItems}</p>}
            </li>
            <li className={`nav-item ${navItemSelected === 'Contacts' ? 'selectedNav ': ''}`}>
              <Link to='/Tigerpunk/Contacts' onClick={()=>selectNavItem('Contacts' )} >Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
	</>

	)
}