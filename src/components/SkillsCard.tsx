// import  codingIcons  from "../assets/coding icons/CodingIcons"

const codingIcons = {
    html:{
        icon:'./assets/coding icons/html5-original.svg',
        iconText:'./assets/coding icons/html5-original-wordmark.svg',
        simple: './assets/coding icons/html5-plain.svg',
        simpleText:'./assets/coding icons/html5-plain-wordmark.svg',
    },
    css:{
        icon:'./assets/coding icons/css3-original.svg',
        iconText:'./assets/coding icons/css3-original-wordmark.svg',
        simple: './assets/coding icons/css3-plain.svg',
        simpleText:'./assets/coding icons/css3-plain-wordmark.svg',
    },
    javascript:{
        icon:'./assets/coding icons/javascript-original.svg',
        iconText:'',
        simple: './assets/coding icons/javascript-plain.svg',
        simpleText:'',
    },
    typescript:{
        icon:'./assets/coding icons/typescript-original.svg',
        iconText:'',
        simple: './assets/coding icons/typescript-plain.svg',
        simpleText:'',
    },
    npm:{
        icon:'./assets/coding icons/icons8-npm-480.png',
        iconText:'',
        simple: './assets/coding icons/codepen-plain.svg',
        simpleText:'',
    },

    figma:{
        icon:'./assets/coding icons/figma-original.svg',
        iconText:'',
        simple: './assets/coding icons/figma-plain.svg',
        simpleText:'',
    },
    github:{
        icon:'./assets/coding icons/github-original.svg',
        iconText:'./assets/coding icons/github-original-wordmark.svg',
        simple: '',
        simpleText:'',
    },
  

    react:{
        icon:'./assets/coding icons/react-original.svg',
        iconText:'./assets/coding icons/react-original-wordmark.svg',
        simple: './assets/coding icons/react-original.svg',
        simpleText:'./assets/coding icons/react-original-wordmark.svg',
    },
    sass:{
        icon:'./assets/coding icons/sass-original.svg',
        iconText:'./assets/coding icons/sass-original.svg',
        simple: '',
        simpleText:'',
    },
    vscode:{
        icon:'./assets/coding icons/vscode-original.svg',
        iconText:'./assets/coding icons/vscode-original-wordmark.svg',
        simple: './assets/coding icons/vscode-plain.svg',
        simpleText:'./assets/coding icons/vscode-plain-wordmark.svg',
    },
}

const learningSkills = [ 'sass', 'figma']

export const SkillsCard = () => {


    return (
        <>
        <div id="skills-container">
        {Object.entries(codingIcons).map(([iconName,c],i) => {
                if (!learningSkills.includes(iconName.toString()) ) {
                    return (
                        <div key={i} className="icon-card flex-center">
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