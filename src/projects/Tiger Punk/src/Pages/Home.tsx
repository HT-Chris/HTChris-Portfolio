import { GallerySection } from '../Components/GallerySection'
import { NavBar } from '../Components/NavBar'
import { Footer } from '../Components/Footer'
import { Link } from 'react-router-dom'
import { TigerPunkContext } from '../Components/TigerPunkContext'
import { useContext, useState } from 'react'
import { products } from '../assets/Products/ProductsList'


export const Home = () => {

	const {selectNavItem} = useContext(TigerPunkContext)
	const [currentSlide, setCurrentSlide] = useState(0);

	const merchItems = products.map((product) => product.imageUrl)


	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % merchItems.length);
	};
  
	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + merchItems.length) % merchItems.length);
	};
  



	return (
			<>
		
		<NavBar/>
  
  
	<main>
  
		<section id="hero-section" className="tiger-punk-app">

			<header>
				<div id="hero-text">
					<h1 className="text-fast">Fast,</h1>
					<h1 className="text-hard">Hard,</h1>
					<h1 className="text-loud">Loud</h1>
					<p className='hero-text-p'>We believe that energy can be pass from person to person in the form of art.  It's how we breathe life into one another. And we will not stop, 
						We are Tiger Punk!</p>
					<Link to='/TourDates' className="home-tickets-link" onClick={()=>selectNavItem('Tour' )}>
						<button className="btn-home-tickets-hero">
							Get Tickets!
							</button>
					</Link>
				</div>
			</header>
			</section>
	
		
			<section id="tour-dates-home">
				<div id="paper">
					<div id="pattern">
						<div id="content">
						<h2>
							Tour Dates
						</h2>
							<ul>
								<li className='line-through'>
								<p className='sold-out'>Sold Out!</p>
									November 10, 2023 - Phoenix, Arizona at Starlight Hall
								</li>
								<li className='line-through'>
								<p className='sold-out'>Sold Out!</p>
									November 15, 2023 - Denver, Colorado at Moonbeam Arena
								</li>
								<li className='line-through'>
									November 20, 2023 - Austin, Texas at Sunset Theater
								</li>
								<li className='line-through'>
									November 25, 2023 - New Orleans, Louisiana at Crystal Pavilion
								</li>
								<li className='line-through'>
									<p className='sold-out'>Sold Out!</p>
									December 1, 2023 - Miami, Florida at Emerald Palace
								</li >
								<li className='line-through'>
									<p className='sold-out'>Sold Out!</p>
									December 5, 2023 - Chicago, Illinois at Aurora Center
								</li>
								<li className='line-through'>
									December 10, 2023 - Nashville, Tennessee at Sapphire Hall
								</li>
								<li className='line-through'>
									<p className='sold-out'>Sold Out!</p>
									December 15, 2023 - Kansas City, Missouri at Golden Plaza
								</li>
								<li>
									<p className='sold-out'>Sold Out!</p>
									December 20, 2023 - Seattle, Washington at Rainbow Stadium
								</li>
								<li>
									<p className='sold-out'>Sold Out!</p>
									December 25, 2023 - Portland, Oregon at Crimson Theater
								</li>
								<li>
									<p className='sold-out'>Sold Out!</p>
									December 30, 2023 - San Francisco, California at Diamond Ballroom
								</li>
								<li>
									January 5, 2024 - Las Vegas, Nevada at Platinum Arena
								</li>
								<li>
									<p className='sold-out'>Sold Out!</p>
									January 10, 2024 - Salt Lake City, Utah at Opal Center
								</li>
							</ul>
						</div>
					</div>
				</div>
				<Link to='/TourDates' onClick={()=>selectNavItem('Tour' )}>
					<button className="btn-home-tickets">Get Tickets!</button>
				</Link>
			
		</section>

		<section id='gallery-section'>
			<div id="gallery-home-container">
				<GallerySection/>
			</div>
		</section>

		<section id='merch-section'>

			<h1>Shop Merch!</h1>

			<div id='home-slide'>
				<button className='btn btn-merch-slide' onClick={prevSlide}>PREV</button>
					<Link to='/Merch' onClick={()=>selectNavItem('Merch' )}>
						<img className='home-img' src={merchItems[currentSlide]} alt="carousel" />
					</Link>
				<button className='btn btn-merch-slide' onClick={nextSlide}>Next</button>
			</div>
		</section>
	
  
	</main>
	<Footer/>
	</>

	)
}