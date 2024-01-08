import { Link } from 'react-router-dom';

type ProjectType = {
    thumbnail:string,
    title:string,
    skills:string[],
    details:string,
    links:string[],

}


type ProjectCardType={
    project:ProjectType
}
export const ProjectCard = ({project} : ProjectCardType) => {


return (
    <div className="project-card">
        <img className="project-img" src={project.thumbnail} alt="" />
        <div className="project-card-text">
            <h3>{project.title}</h3>
            <p className="skills-list">{project.skills.map( skill =>{
                return skill + ' '
            })}</p>
            <p>{project.details}</p>
            <div className="project-card-links">
                <button className="btn btn-link">
                    <Link to={project.links[0]}>Live Demo</Link>
                </button>
                <button className="btn btn-link">
                    <a href={project.links[1]} target="_blank">Github Repo</a>
                </button>
            </div>
        </div>
    </div>
)


}