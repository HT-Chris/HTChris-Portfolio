

type PolaroidProps = {
	image: string;
	date: string;
	style?: React.CSSProperties;
  }

export const Polaroid = ({image, date, style}:PolaroidProps) => {



	return(
		<>

		<div className="polaroid-card home-gallery" style={style}>
			<div className="polaroid-img-container">
				<img className='polaroid-img' src={image} alt={`${date}`} />
			</div>
			<p className="polaroid-date">
				{date}
			</p>
		</div>
		</>
	)
}
