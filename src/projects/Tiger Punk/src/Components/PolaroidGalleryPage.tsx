

type PolaroidProps = {
	image: string;
	date: string;
	style?: React.CSSProperties;
  }

export const PolaroidGalleryPage = ({image, date, style}:PolaroidProps) => {



	return(
		<>

		<div className="polaroid-card gallery-polaroid" style={style}>
			<div className="polaroid-img-container">
				<img className='polaroid-img' src={image} alt={`${date}`} />
			</div>
			
		</div>
		</>
	)
}
