import { Navbar } from './components/Navbar'
import { SkillsCard } from './components/SkillsCard'
import  codingIcons  from './assets/coding icons/CodingIcons'
import { useRef } from 'react';
import cloud0 from './assets/backgroundClouds/cloud hero 1.png'
import cloud1 from './assets/backgroundClouds/cloud hero 1.png'
import cloud2 from './assets/backgroundClouds/cloud hero 2.png'
import cloud3 from './assets/backgroundClouds/cloud hero 3.png'
import cloud4 from './assets/backgroundClouds/cloud skill 1.png'
import cloud5 from './assets/backgroundClouds/cloud skill 2.png'
import cloud6 from './assets/backgroundClouds/cloud skill 3.png'
import cloud7 from './assets/backgroundClouds/cloud skill 4.png'
import cloud8 from './assets/backgroundClouds/cloud project 1.png'
import cloud9 from './assets/backgroundClouds/cloud project 2.png'
import cloud10 from './assets/backgroundClouds/cloud about 1.png'
import cloud11 from './assets/backgroundClouds/cloud about 2.png'
import cloud12 from './assets/backgroundClouds/cloud contact 1.png'
import cloud13 from './assets/backgroundClouds/cloud contact 2.png'
import cloud14 from './assets/backgroundClouds/cloud contact 3.png'
import { ProjectCard } from './components/ProjectCard';
import { ContactCard } from './components/ContactCard';
// import  socialMediaIconList  from './assets/socialMediaIcons/socialIconList';
import artProfileImg from './assets/miscImg/art profile img.png'
import profileImg  from './assets/miscImg/profile img.png'
import emailIcon from './assets/socialMediaIcons/icons8-email-100.png'

import githubIcon from './assets/socialMediaIcons/icons8-github-96.png'
import tiktokIcon from './assets/socialMediaIcons/icons8-tiktok-100.png'
import linkedinIcon from './assets/socialMediaIcons/icons8-linkedin.svg'
import youtubeIcon from './assets/socialMediaIcons/icons8-youtube-100.png'

import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

// import  backgroundClouds  from './assets/backgroundClouds/backgroundImages'

const socialMediaIconList= [
  {
      icon: githubIcon,
      text: 'Github',
      link: ''},
  {
      icon: tiktokIcon,
      text: 'TikTok',
      link: ''},
  {
      icon: linkedinIcon,
      text: 'Linkedin',
      link: ''},
  {
      icon: youtubeIcon,
      text: 'Youtube',
      link: ''},
 
]

function App() {
  const ref = useRef<IParallax>(null);


  const goToContact = () => {
   if(ref.current){
    ref.current.scrollTo(3);
    }
  }


  return (
    <>
          <Navbar parallax={ref} className="navbar-fixed"/>
        <Parallax pages={4} className='scroll' ref={ref} >
    <main className='flex-center' >

          <section id='hero-section' className='flex-center column'>
            <ParallaxLayer speed={0.2} className='flex-center '>
              <div className="clouds-1">
                <img src={cloud0} className='cover' alt="Clouds" />
              </div>
            </ParallaxLayer>
            <ParallaxLayer speed={.4} className='flex-center'>
              <div className="clouds-2">
                <img src={cloud3}  className='cover darker img-left rotate-1 '  alt="Clouds" />
                <img src={cloud1}  className='cover darker img-left rotate-2 '  alt="Clouds" />
              </div>
            </ParallaxLayer>
            <ParallaxLayer speed={1} className='flex-center'>
              <div className="clouds-2 lower">
                <img src={cloud2}  className='cover rotate flipped-img img-right brighter'  alt="Clouds" />
                <img src={cloud2}  className='cover rotate flipped-img rotate-1 img-right brighter'  alt="Clouds" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.6} className='flex-center '>
              <div id="hero-left" className=' flex-center column'>
                  <div id='hero-header' className="container">
                    <header>Good Day!</header>
                  </div>
                <div id='hero-text' className="container flex-center column">
                  <h1>I'm HT Chris, Front-end Developer</h1>
                  <p>I build the Frontend of websites turning your ideas into code. Based in Seattle, WA.</p>
                </div> 
              <button onClick={()=>goToContact()} className="btn btn-contact">Get in touch!</button>
              </div>
              <div id="hero-image">
                <img className='profile-img flipped-img' src={profileImg} alt="Profile Image" />
              </div>

            </ParallaxLayer>
          </section>

        <section id='skills-section' className='flex-center'>
          <ParallaxLayer speed={0.2} className='flex-center' offset={.99}>
            <div className="clouds-1">
              <img src={cloud4} className='cover flipped-img' alt="Clouds" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.4} className='flex-center' offset={.99}>
              <div className="clouds-2">
                <img src={cloud5} className='cover flipped-img' alt="Clouds" />
              </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.6} className='flex-center' offset={.99}>
            <div className="clouds-2">
              <img src={cloud11} className='cover ' alt="Clouds" />
            </div>
          </ParallaxLayer>

              <ParallaxLayer speed={0.6} className='flex-center ' offset={.99} >
                <div className="container flex-center column">
                  <header>Skill Sets</header>
                <div id='skills-bottom' className="flex-center column">
                <SkillsCard/>
                  <div id="currently-learning" className='flex-center column'>
                    <h3>Currently Learning</h3>
                    <img className='code-icon' src={codingIcons.sass.icon} alt="Sass icon" />
                    <p className='icon-card-text'>SASS</p>
                  </div>  
                </div>
              </div>
            </ParallaxLayer>
          </section>

      <section id='projects-section' className='flex-center'>
        <ParallaxLayer speed={0.2} className='flex-center' offset={1.99}>
          <div className="clouds-1">
            <img src={cloud5} className='cover' alt="Clouds" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.9} className='flex-center' offset={1.99}>
          <div className="clouds-2">
            <img src={cloud7} className='cover' alt="Clouds" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.7} className='flex-center' offset={1.99}>
          <div className="clouds-2">
            <img src={cloud6} className='cover' alt="Clouds" />
          </div>
        </ParallaxLayer>

          <ParallaxLayer speed={0.5} className='flex-center ' offset={1.5}>
            <div className="container">
              <header>Projects</header>
                <ProjectCard/>
              <div id="projects-container">
              </div>
            </div>
          </ParallaxLayer>
      </section>

      <section id='about-section' className='flex-center'>
          <ParallaxLayer speed={0.4} className='flex-center' offset={2.5}>
            <div className="clouds-2">
              <img src={cloud10} className='cover' alt="Clouds" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.2} className='flex-center' offset={2.5}>
            <div className="clouds-1">
              <img src={cloud8} className='cover' alt="Clouds" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.7} className='flex-center' offset={2.5}>
            <div className="clouds-1">
              <img src={cloud9} className='cover darker img-left' alt="Clouds" />
              {/* <img src={cloud11} className='cover darker img-right rotate-2' alt="Clouds" /> */}
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer speed={0.8} className='flex-center ' offset={2} >
              <div className="container flex-center">
                <div id="about-left">
                <header>About Me</header>
                  <p>While I'm not coding I enjoy hiking, video games, cooking, and art! One of the reason I fell in love with frontend dev is the
                     fact that I can itch my creative soul! Every project I see as a piece of art that I bring into the world.</p>
                </div>
                <div id="about-right">
                <img className='profile-img' src={artProfileImg} alt="Art Image" />
                </div>
              </div>
            </ParallaxLayer>
      </section>

      <section id='contact-section' className='flex-center'>
      
          <ParallaxLayer speed={0.2} className='flex-center' offset={3}>
            <div className="clouds-1">
            {/* <img src={backgroundClouds.cloud11} className='cover' alt="Clouds" /> */}
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.2} className='flex-center' offset={3}>
            <div className="clouds-1">
              <img src={cloud12} className='cover' alt="Clouds" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.4} className='flex-center' offset={3}>
            <div className="clouds-2">
              <img src={cloud13} className='cover' alt="Clouds" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.4} className='flex-center' offset={3}>
            <div className="clouds-1">
              <img src={cloud14} className='cover ' alt="Clouds" />
            </div>
          </ParallaxLayer>

          <ParallaxLayer speed={0.6} className='flex-center ' offset={3}>
            <div  className="container flex-center column" id='contact-container'>
              <header>Contact</header>
              <a href='mailto:htchris.ha@gmail.com'  id='contact-Email' className='flex-center column contact-card' >
                    <h5>Email</h5>
                    <img src={emailIcon} alt="Mail" className='email-icon' />
                    <p id='email-address'>HTChris.ha@gmail</p> 
              </a>
              <h2>Other links</h2>
              <div id="contact-info-container">

                {socialMediaIconList.map((iconInfo,i) => {
                  return <ContactCard key={i} iconInfo={iconInfo}/>
                })}
              </div>
            </div>
          </ParallaxLayer>
      </section>

    </main> 
      </Parallax>
    
   
    </>

  )
}

export default App
