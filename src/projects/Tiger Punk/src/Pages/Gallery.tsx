import { GalleryFiles } from "../assets/Gallery/GalleryFiles"
import { PolaroidGalleryPage } from "../Components/PolaroidGalleryPage"
import { NavBar } from "../Components/NavBar"
import { Footer } from "../Components/Footer"

export const Gallery = () => {

	const style1 = {
	
		
	}
	return ( 
		<>
		<NavBar/>
		<div id="gallery-page" className="tiger-punk-app">
			<h1 className="line-through">Gallery</h1>
			<h1>Memories</h1>
			<div id="gallery-page-container">
				{GalleryFiles.map((image) => (
					<PolaroidGalleryPage image={image} date={'???'} style={style1} />
					))}
			</div>
		</div>
		<Footer />
		</>
	)
}