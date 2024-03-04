import { NavBar } from "../Components/NavBar"
import { Footer } from "../Components/Footer"
import { useState } from "react"



export const TourDates = () => {

	const [getTickets, setGetTickets] = useState(false)

	const getTicketsBtn = (set:boolean) => {
		setGetTickets(set)
		setTimeout(() => {
			setGetTickets(false)
		}, 3000);
	}

	return ( 
		<>
		<NavBar/>
		<div id="tour-dates-page" className="tiger-punk-app">

			<div className={`ticket-message ${getTickets ? '' : 'hide'}`}>
				<h2>Tickets Purchased!</h2>
				<button className="btn" onClick={()=>getTicketsBtn(false)}>Back</button>
			</div>
		
			<h1>
				Tour Dates
			</h1>

				<ul id='tour-list'>
			
			<header id="tour-date-header">
				<h2 id="tour-header-date">Date</h2>
				<h2 id="tour-header-city">City</h2>
				<h2 id="tour-header-venue">Venue</h2>
				<h2 id="tour-header-tickets">Tickets</h2>
			</header>
					<span className="line"></span>
					<li className=' tour-date-table'>
					<span className="tour-page-sold">Sold Out!</span>

						<p className="tour-page-date ">
							November 10, 2023 
						</p>
						<p className="tour-page-city">
							Phoenix, Arizona
						</p>
						<p className="tour-page-venue">
							Starlight Hall
						</p>
						<button className="btn btn-ticket" onClick={()=>getTicketsBtn(true)} disabled>Tickets</button>
					</li>

					<span className="line"></span>
					<li className=' tour-date-table'>
					<span className="tour-page-sold">Sold Out!</span>
						<p className="tour-page-date">
							November 15, 2023
						</p>
						<p className="tour-page-city">
							Denver, Colorado
						</p>
						<p className="tour-page-venue">
							Moonbeam Arena
						</p>
						<button className="btn btn-ticket" onClick={()=>getTicketsBtn(true)} disabled>Tickets</button>
					</li>
					<span className="line"></span>
					<li className=' tour-date-table'>
						<p className="tour-page-date">
							November 20, 2023
						</p>
						<p className="tour-page-city">
							Austin, Texas
						</p>
						<p className="tour-page-venue">
							Sunset Theater
						</p>
						<button className="btn btn-ticket" onClick={()=>getTicketsBtn(true)} disabled>Tickets</button>
					</li>
					<span className="line"></span>
					<li className=' tour-date-table'>
						<p className="tour-page-date">
							November 25, 2023
						</p>
						<p className="tour-page-city">
							New Orleans, Louisiana
						</p>
						<p className="tour-page-venue">
							Crystal Pavilion
						</p>
						<button className="btn btn-ticket" onClick={()=>getTicketsBtn(true)} disabled>Tickets</button>
					</li>
					<span className="line"></span>
					<li className=' tour-date-table'>
					<span className="tour-page-sold">Sold Out!</span>
						<p className="tour-page-date">
							December 1, 2023
						</p>
						<p className="tour-page-city">
							Miami, Florida
						</p>
						<p className="tour-page-venue">
							Emerald Palace
						</p>
						<button className="btn btn-ticket" onClick={()=>getTicketsBtn(true)} disabled>Tickets</button>
					</li>
					<span className="line"></span>
					<li className=' tour-date-table'>
					<span className="tour-page-sold">Sold Out!</span>
						<p className="tour-page-date">
							December 5, 2023
						</p>
						<p className="tour-page-city">
							Chicago, Illinois
						</p>
						<p className="tour-page-venue">
							Aurora Center
						</p>
						<button className="btn btn-ticket" onClick={()=>getTicketsBtn(true)} disabled>Tickets</button>
					</li>
					<span className="line"></span>
					<li className=' tour-date-table'>
					<span className="tour-page-sold">Sold Out!</span>
						<p className="tour-page-date">
							December 10, 2023
						</p>
						<p className="tour-page-city">
							Nashville, Tennessee
						</p>
						<p className="tour-page-venue">
							Sapphire Hall
						</p>
						<button className="btn btn-ticket" onClick={()=>getTicketsBtn(true)} disabled>Tickets</button>
					</li>
					<span className="line"></span>
					<li className=' tour-date-table'>
					<span className="tour-page-sold">Sold Out!</span>
						<p className="tour-page-date">
							December 15, 2023
						</p>
						<p className="tour-page-city">
							Kansas City, Missouri
						</p>
						<p className="tour-page-venue">
							Golden Plaza
						</p>
						<button className="btn btn-ticket" onClick={()=>getTicketsBtn(true)} disabled>Tickets</button>
					</li>
					<span className="line line-transparent"></span>
					<li className=' tour-date-table'>
					<span className="tour-page-sold">Sold Out!</span>
						<p className="tour-page-date">
							December 20, 2023
						</p>
						<p className="tour-page-city">
							Seattle, Washington
						</p>
						<p className="tour-page-venue">
							Rainbow Stadium
						</p>
						<button className="btn btn-ticket" onClick={()=>getTicketsBtn(true)}>Tickets</button>
					</li>
					<span className="line line-transparent"></span>
					<li className=' tour-date-table'>
					<span className="tour-page-sold">Sold Out!</span>
						<p className="tour-page-date">
							December 25, 2023
						</p>
						<p className="tour-page-city">
							Portland, Oregon
						</p>
						<p className="tour-page-venue">
							Crimson Theater
						</p>
						<button className="btn btn-ticket" onClick={()=>getTicketsBtn(true)}>Tickets</button>
					</li>
					<span className="line line-transparent"></span>
					<li className=' tour-date-table'>
					<span className="tour-page-sold">Sold Out!</span>
						<p className="tour-page-date">
							December 30, 2023 
						</p>
						<p className="tour-page-city">
							San Francisco, California
						</p>
						<p className="tour-page-venue">
							Diamond Ballroom
						</p>
						<button className="btn btn-ticket" onClick={()=>getTicketsBtn(true)}>Tickets</button>
					</li>
					<span className="line line-transparent"></span>
					<li className=' tour-date-table'>
						<p className="tour-page-date">
							January 5, 2024
						</p>
						<p className="tour-page-city">
							Las Vegas, Nevada
						</p>
						<p className="tour-page-venue">
							Platinum Arena
						</p>
						<button className="btn btn-ticket" onClick={()=>getTicketsBtn(true)}>Tickets</button>
					</li>
					<span className="line line-transparent"></span>
					<li className=' tour-date-table'>
					<span className="tour-page-sold">Sold Out!</span>
						<p className="tour-page-date">
							January 10, 2024
						</p>
						<p className="tour-page-city">
							Salt Lake City, Utah
						</p>
						<p className="tour-page-venue">
							Opal Center
						</p>
						<button className="btn btn-ticket" onClick={()=>getTicketsBtn(true)}>Tickets</button>
					</li>
					
				</ul>
				</div>
		<Footer/>
		</>
	)
}