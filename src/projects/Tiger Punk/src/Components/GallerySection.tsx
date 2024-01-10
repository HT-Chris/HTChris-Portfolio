import { GalleryFiles } from "../assets/Gallery/GalleryFiles"
import { Polaroid } from "./Polaroid"


export const GallerySection = () => {

const style1 = {
	transform: 'rotate(27deg) translateY(1.2rem)',
	gridRow:'1',
	gridColumn: '2/-1',
	selfAlign:'center',
	
}
const style2 = {
	transform: 'rotate(-18deg) translateY(-0.8rem)',
	gridRow:'1',
	gridColumn: '4/-1',
	selfAlign:'center',

}
const style3 = {
	transform: 'rotate(3deg) translateY(1.4rem)',
	gridRow:'1',
	gridColumn: '5/-1',
	selfAlign:'center',

}
const style4 = {
	transform: 'rotate(7deg) translateY(-2.2rem)',
	gridRow:'1',
	gridColumn: '7/-1',
	selfAlign:'center',

}
const style5 = {
	transform: 'rotate(21deg) translateY(2.2rem)',
	gridRow:'1',
	gridColumn: '8/-1',
	selfAlign:'center',

}


	return (

		<>
		<div id="gallery-homepage">

        <Polaroid image={GalleryFiles[1]} date={'02-14-1999'} style={style1}/>
        <Polaroid image={GalleryFiles[2]} date={'10-31-2007'} style={style2}/>
        <Polaroid image={GalleryFiles[6]} date={'04-20-2014'} style={style3}/>
        <Polaroid image={GalleryFiles[4]} date={'02-14-2014'} style={style4}/>
        <Polaroid image={GalleryFiles[8]} date={'01-01-2018'} style={style5}/>
		</div>
      
		</>
	)


}