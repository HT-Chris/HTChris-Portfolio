import { codingIcons } from "../assets/coding icons/CodingIcons"


const learningSkills = [ 'sass', 'codepen']

export const SkillsCard = () => {


    return (
        <>
        <div id="skills-container">
        {Object.entries(codingIcons).map(([iconName,c],i) => {
                if (!learningSkills.includes(iconName.toString()) ) {
                    return (
                        <div key={i} className="icon-card">
                             <img className="icon-card-img" src={c.icon} alt={iconName.toString().toUpperCase()} />
                            <p className="icon-card-text">{iconName.toString().toUpperCase()}</p>
                        </div>
                    )
                }
                console.log(c)
            })}
        </div>
        
        </>
    )
}