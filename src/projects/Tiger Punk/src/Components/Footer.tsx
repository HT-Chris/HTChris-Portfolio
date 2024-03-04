import logo from '../assets/Logo/tiger-punk-high-resolution-logo-transparent.png'
import { Link } from 'react-router-dom'
import {  useContext } from 'react'
import { TigerPunkContext } from './TigerPunkContext'


export const Footer = () => {
	const { selectNavItem} = useContext(TigerPunkContext)

	return(
		<>
		<div id="footer-main">
			<div id="footer-logo">
				<img className='logo-sm' src={logo} alt="Tiger Punk Logo" />
				</div>
			<div id="footer-contact">
			<div id="footer-newsletter">
				<h4>Join Our Newsletter!</h4>
				<input type="email" name="" placeholder='Enter Email' id="newsletter-input" className='input'/>
				<button className='btn'>Join</button>
			</div>
				<div id="contact-group">
					<p>Email@email.com</p>
					<p>(123)-456-7890</p>
				</div>
			</div>
			<div id="footer-links">
			<ul>
				<li className="nav-item"> 
					<Link to='/Tigerpunk' onClick={()=>selectNavItem('Home' )}>Home</Link>
				</li>
				<li className="nav-item"> 
					<Link to='/Tigerpunk/TourDates' onClick={()=>selectNavItem('Tour' )}>Tour Dates</Link>
				</li>
				<li className="nav-item"> 
					<Link to='/Tigerpunk/Gallery'  onClick={()=>selectNavItem('Gallery' )}>Gallery</Link>
				</li>
				<li className="nav-item"> 
					<Link to='/Tigerpunk/Merch' onClick={()=>selectNavItem('Merch' )} >Merch</Link>
				</li>
				<li className="nav-item"> 
					<Link to='/Tigerpunk/Cart' onClick={()=>selectNavItem('Cart' )} >Cart</Link>
				</li>
				<li className="nav-item"> 
					<Link to='/Tigerpunk/Contacts' onClick={()=>selectNavItem('Contacts' )} >Contacts</Link>
				</li>
				
			</ul>
			</div>
			<div id="footer-form"></div>
			<div id="footer-social">
				<div id="spotify-icon" className="social-icon">
					<a href="/"></a>
				</div>
				<div id="tiktok-icon" className="social-icon">
					<a href="/"></a>
				</div>
				<div id="instagram-icon" className="social-icon">
					<a href="/"></a>
				</div>
				<div id="facebook-icon" className="social-icon">
					<a href="/"></a>
				</div>
				<div id="youtube-icon" className="social-icon">
					<a href=""></a>
				</div>
			</div>
			
		<div id="footer-legal">
			<p>© 2023 MockWebsiteTigerPunk. All rights reserved.</p>
			
		</div>
	</div>
		</>
	)
}