// import  codingIcons  from "../assets/coding icons/CodingIcons"
import htmlIcon from '/src/assets/coding icons/html5-original.svg'
import cssIcon from '/src/assets/coding icons/css3-original.svg'
import javascriptIcon from '/src/assets/coding icons/javascript-original.svg'
import typescriptIcon from '/src/assets/coding icons/typescript-original.svg'
import npmIcon from '/src/assets/coding icons/icons8-npm-480.png'
import figmaIcon from '/src/assets/coding icons/figma-original.svg'
import githubIcon from '/src/assets/coding icons/github-original.svg'
import reactIcon from '/src/assets/coding icons/react-original.svg'
import sassIcon from '/src/assets/coding icons/sass-original.svg'
import vscodeIcon from '/src/assets/coding icons/vscode-original.svg'


const codingIcons = {
    html:{
        icon:htmlIcon,
        iconText:'/src/assets/coding icons/html5-original-wordmark.svg',
        simple: '/src/assets/coding icons/html5-plain.svg',
        simpleText:'/src/assets/coding icons/html5-plain-wordmark.svg',
    },
    css:{
        icon:cssIcon,
        iconText:'/src/assets/coding icons/css3-original-wordmark.svg',
        simple: '/src/assets/coding icons/css3-plain.svg',
        simpleText:'/src/assets/coding icons/css3-plain-wordmark.svg',
    },
    javascript:{
        icon:javascriptIcon,
        iconText:'',
        simple: '/src/assets/coding icons/javascript-plain.svg',
        simpleText:'',
    },
    typescript:{
        icon:typescriptIcon,
        iconText:'',
        simple: '/src/assets/coding icons/typescript-plain.svg',
        simpleText:'',
    },
    npm:{
        icon:npmIcon,
        iconText:'',
        simple: '/src/assets/coding icons/codepen-plain.svg',
        simpleText:'',
    },

    figma:{
        icon:figmaIcon,
        iconText:'',
        simple: '/src/assets/coding icons/figma-plain.svg',
        simpleText:'',
    },
    github:{
        icon:githubIcon,
        iconText:'/src/assets/coding icons/github-original-wordmark.svg',
        simple: '',
        simpleText:'',
    },
  

    react:{
        icon:reactIcon,
        iconText:'/src/assets/coding icons/react-original-wordmark.svg',
        simple: '/src/assets/coding icons/react-original.svg',
        simpleText:'/src/assets/coding icons/react-original-wordmark.svg',
    },
    sass:{
        icon:sassIcon,
        iconText:'/src/assets/coding icons/sass-original.svg',
        simple: '',
        simpleText:'',
    },
    vscode:{
        icon:vscodeIcon,
        iconText:'/src/assets/coding icons/vscode-original-wordmark.svg',
        simple: '/src/assets/coding icons/vscode-plain.svg',
        simpleText:'/src/assets/coding icons/vscode-plain-wordmark.svg',
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
            })}
        </div>
        
        </>
    )
}