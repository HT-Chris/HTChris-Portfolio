


type ProjectCardType = {
	img:string,
	title:string,
	skills:string[],
	details:string,
	links:string[],
}

export const ProjectCard = ({img,title,skills,details, links }:ProjectCardType)  => {


	return (
		<>
		<div className="project-card">
			<img src={img} alt={`${title}`} />
			<h2>{title}</h2>
			<p className="project-skills">{skills}</p>
			<p className="project-details">{details}</p>
			<div className="links-container">
				<button className="btn btn-link">{links[0]}</button>
				<button className="btn btn-link">{links[1]}</button>
			</div>
		</div>
		</>
	)
}