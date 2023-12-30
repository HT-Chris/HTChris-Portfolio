

export const ProjectCard = () => {


return (
    <div className="project-card">
        <img className="project-img" src="" alt="" />
        <div className="project-card-text">
            <h3>Project Title</h3>
            <p className="skills-list">react, typescript, html, css</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio temporibus deleniti deserunt, molestias aperiam porro, modi, neque obcaecati necessitatibus illum mollitia omnis? Dolorum beatae voluptatum dolores natus voluptatem ad deserunt.</p>
            <div className="project-card-links">
                <button className="btn btn-link">
                    <a href="">Live Demo</a>
                </button>
                <button className="btn btn-link">
                    <a href="">Github Repo</a>
                </button>
            </div>
        </div>
    </div>
)


}