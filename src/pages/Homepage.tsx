import { Navbar } from '../components/Navbar'
import { SkillsCard } from '../components/SkillsCard'
import { ProjectCard } from '../components/ProjectCard';
import { ContactCard } from '../components/ContactCard';
import { ProjectList } from '../assets/ProjectList';
import { useRef, useState, useEffect } from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from '../assets/miscImg/HT Logo copy.png'
import  codingIcons  from '../assets/coding icons/CodingIcons'

// import  socialMediaIconList  from './assets/socialMediaIcons/socialIconList';
import artProfileImg from '../assets/miscImg/art profile img.png'
import profileImg  from '../assets/miscImg/profile img.png'
import emailIcon from '../assets/socialMediaIcons/icons8-email-100.png'
import socialMediaIconList from '../assets/socialMediaIcons/socialIconList';


import backgroundClouds from '../assets/backgroundClouds/backgroundImages';


import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'



export const Homepage = () => {
const [isLoading, setIsLoading] = useState(true)
const [isCarousel, setIsCarousel] = useState(true)
const [carouselItem, setCarouselItem] = useState(0)
const [mobileMode, setMobileMode] = useState(false)

  const ref = useRef<IParallax>(null);
    const goToContact = () => {
        if(ref.current){
         ref.current.scrollTo(3);
         }
       }

       useEffect(() => {
          setTimeout(function() {
              setIsLoading(false);
          }, 2300)
          carouselCheck()
          mobileCheck()
       }, [])

  const carouselCheck = () => {
    if(window.innerWidth < 1440){
      setIsCarousel(true)
    }else{
      setIsCarousel(false)
    }
  }    

  const mobileCheck = () => {
    if(window.innerWidth < 768){
      setMobileMode(true)
      console.log('mobile')
    }else{
      setMobileMode(false)
    }
  }

  const carouselList = (direction:string) => {

    if(direction === 'left'){
      if(carouselItem !== 0){
        setCarouselItem(prev=> prev-1)
      }else{
        setCarouselItem(ProjectList.length-1) 
      }
    } else{
      if(carouselItem !== ProjectList.length-1){
        setCarouselItem(prev=> prev+1)
      }else{
        setCarouselItem(0)
      }
    }
  }

      //  document.addEventListener('DOMContentLoaded',function() {
      //   setTimeout(function() {
      //     const loadingScreen = document.getElementById('loading-screen');
      //     if (loadingScreen) {
      //     loadingScreen.style.display = 'none';
         
      //     }
      //   }, 2000);
      // })
     
    return (
        <>

        <div className={`loading-screen  ${isLoading ? 'flex-center ' : 'hide'}`}>
          <img src={logo} alt="Loading..." className="loading-img" />
        </div>
        
        
        <Navbar parallax={ref} className="navbar-fixed"/>
        <Parallax pages={4} className='scroll' ref={ref} >
    <main id='main-app' className='flex-center' >

          <section id='hero-section' className='flex-center column'>
            <ParallaxLayer speed={0.2} className='flex-center '>
              <div className="clouds-1">
                <img src={backgroundClouds[0]} className='cover' alt="Clouds" />
              </div>
            </ParallaxLayer>
            <ParallaxLayer speed={.4} className='flex-center'>
              <div className="clouds-2">
                <img src={backgroundClouds[3]}  className='cover darker img-left rotate-1 '  alt="Clouds" />
                <img src={backgroundClouds[2]}  className='cover darker img-left rotate-2 '  alt="Clouds" />
              </div>
            </ParallaxLayer>
            <ParallaxLayer speed={1} className='flex-center'>
              <div className="clouds-2 lower">
                <img src={backgroundClouds[2]}  className='cover rotate flipped-img img-right brighter cloud-mobile'  alt="Clouds" />
                <img src={backgroundClouds[2]}  className='cover rotate flipped-img rotate-1 img-right brighter cloud-mobile'  alt="Clouds" />
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
                <button onClick={()=>goToContact()} className="btn btn-contact">Get in touch!</button>
                </div> 
              </div>
              
              <div id="hero-image" className={`${mobileMode ? 'hide' : ''}`}>
                <img className='profile-img flipped-img' src={profileImg} alt="Profile Image" />
              </div>

            </ParallaxLayer>
          </section>

        <section id='skills-section' className='flex-center'>
          <ParallaxLayer speed={0.2} className='flex-center' offset={.99}>
            <div className="clouds-1">
              <img src={backgroundClouds[4]} className='cover flipped-img' alt="Clouds" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.4} className='flex-center' offset={.99}>
              <div className="clouds-2">
                <img src={backgroundClouds[5]} className='cover flipped-img' alt="Clouds" />
              </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.6} className='flex-center' offset={.99}>
            <div className="clouds-2">
              <img src={backgroundClouds[11]} className='cover ' alt="Clouds" />
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
            <img src={backgroundClouds[5]} className='cover' alt="Clouds" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.9} className='flex-center' offset={1.99}>
          <div className="clouds-2">
            <img src={backgroundClouds[7]} className='cover' alt="Clouds" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.7} className='flex-center' offset={1.99}>
          <div className="clouds-2">
            <img src={backgroundClouds[6]} className='cover' alt="Clouds" />
          </div>
        </ParallaxLayer>

          <ParallaxLayer speed={0.5} className='flex-center ' offset={1.5}>
            <div className="container">
              <header>Projects</header>
              <div id="projects-container" className={` ${isCarousel ? 'hide' : ''}`}>
                {ProjectList.map((p,i) =>{
                return <ProjectCard key={i} project={p}/>
                })}
              </div>
              <div id="projects-container" className={` ${isCarousel ? '' : 'hide'}`}>
                <div className="carousel  flex-center">
                  <button className={`btn-carousel flex-center ${mobileMode ? 'hide' : ''}`} onClick={()=>carouselList('left')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <ProjectCard key={carouselItem} project={ProjectList[carouselItem]}/>
                  <button className={`btn-carousel flex-center ${mobileMode ? 'hide' : ''}`} onClick={()=>carouselList('right')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  <div id="mobile-btn" className={`flex-center ${mobileMode ? '' : 'hide'}`}>
                  <button className='btn-carousel flex-center' onClick={()=>carouselList('left')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button className='btn-carousel flex-center' onClick={()=>carouselList('right')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
      </section>

      <section id='about-section' className='flex-center'>
          <ParallaxLayer speed={0.4} className='flex-center' offset={2.5}>
            <div className="clouds-2">
              <img src={backgroundClouds[10]} className='cover' alt="Clouds" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.2} className='flex-center' offset={2.5}>
            <div className="clouds-1">
              <img src={backgroundClouds[8]} className='cover' alt="Clouds" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.7} className='flex-center' offset={2.5}>
            <div className="clouds-1">
              <img src={backgroundClouds[9]} className='cover darker img-left' alt="Clouds" />
              {/* <img src={cloud11} className='cover darker img-right rotate-2' alt="Clouds" /> */}
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer speed={0.8} className='flex-center ' offset={2.5} >
              <div className="container flex-center about-container">
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
              <img src={backgroundClouds[12]} className='cover' alt="Clouds" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.4} className='flex-center' offset={3}>
            <div className="clouds-2">
              <img src={backgroundClouds[13]} className='cover' alt="Clouds" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.4} className='flex-center' offset={3}>
            <div className="clouds-1">
              <img src={backgroundClouds[14]} className='cover ' alt="Clouds" />
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