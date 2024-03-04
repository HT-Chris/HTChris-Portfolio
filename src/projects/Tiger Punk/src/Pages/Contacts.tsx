import { NavBar } from "../Components/NavBar"
import { Footer } from "../Components/Footer"



export const Contacts = () => {

	return ( 
		<>
		<NavBar/>
		<div id="contacts-page" className="tiger-punk-app">
			<header>
				<h1>Contact Us</h1>
			</header>
			<div id="contacts-booking">
				<h2>For Booking</h2>
				<div className="input-btn">
					<input type="email" name="" placeholder="Enter Email" id="contact-email-input" className="input"/>
					<button className="btn btn-contacts">Book Us</button>
				</div>
			</div>
			<div id="contacts-newsletter">
				<h2>Join Our Newsletter!</h2>
				<div className="input-btn">
					<input type="email" name="" placeholder="Enter Email" id="contact-newsletter-input" className="input" />
					<button className="btn  btn-contacts">Join</button>
				</div>
			</div>
			<div id="contacts-info">
				<h2>Email: email@email.com</h2>
				<h2>Phone: (123)-456-7890</h2>
			</div>
			<div id="contacts-social">
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
		</div>
		<Footer/>
		</>
	)
}