import { Navbar } from './components/Navbar'
import { SkillsCard } from './components/SkillsCard'
import { codingIcons } from './assets/coding icons/CodingIcons'
import {  useRef, useState } from 'react';
import { backgroundClouds } from './assets/backgroundClouds/backgroundImages'
import { ProjectCard } from './components/ProjectCard';

import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'



function App() {
  const parallax = useRef<IParallax>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    const newScrollPosition = e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight);
    setScrollPosition(newScrollPosition);
  };
  console.log(scrollPosition)

  /**
   * 
   * have a slow nav scroll to each section 
   * 
   * take pictures 
   * 
   * npm
   * 
   * project card
   * 
   * social links, contacts
   */
  

  return (
    <>
    <Navbar/>
    <main className='flex-center' onScroll={handleScroll}>
        <Parallax pages={5} className='scroll' ref={parallax} onScroll={handleScroll}>
          <section id='hero-section' className='flex-center column'>
            <ParallaxLayer speed={0.2} className='flex-center '>
              <div className="clouds-1">
                <img src={backgroundClouds[0]} className='cover' alt="Clouds" />
              </div>
            </ParallaxLayer>
            <ParallaxLayer speed={.4} className='flex-center'>
              <div className="clouds-2">
                <img src={backgroundClouds[1]}  className='cover darker img-left rotate-1 '  alt="Clouds" />
                <img src={backgroundClouds[1]}  className='cover darker img-left rotate-2 '  alt="Clouds" />
              </div>
            </ParallaxLayer>
            <ParallaxLayer speed={1} className='flex-center'>
              <div className="clouds-2 lower">
                <img src={backgroundClouds[2]}  className='cover rotate flipped-img img-right brighter'  alt="Clouds" />
                <img src={backgroundClouds[2]}  className='cover rotate flipped-img rotate-1 img-right brighter'  alt="Clouds" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.6} className='flex-center '>
              <div className="container flex-center column">
                <header>Bright and Positive</header>
                  <p>I'm a Seattle, WA base frontend developer ready to work for you and your team. I'm a passionate,
                    eager to craft digital experiences that captivate and innovate.
                    I'm here to bring creativity to life through web development.</p>
                  <button className="btn">Contact Me</button>
                <div id="hero-image"></div>
              </div>
            </ParallaxLayer>
          </section>

        <section id='skills-section' className='flex-center'>
          <ParallaxLayer speed={0.2} className='flex-center' offset={1}>
            <div className="clouds-1">
              <img src={backgroundClouds[3]} className='cover flipped-img' alt="Clouds" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.4} className='flex-center' offset={3}>
              <div className="clouds-2">
                <img src={backgroundClouds[8]} className='cover flipped-img' alt="Clouds" />
              </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.4} className='flex-center' offset={1}>
            <div className="clouds-2">
              <img src={backgroundClouds[4]} className='cover darker' alt="Clouds" />
            </div>
          </ParallaxLayer>

              <ParallaxLayer speed={0.6} className='flex-center ' offset={1} >
                <div className="container flex-center column">
                  <header>Skills</header>
                <div id='skills-bottom' className="flex-center column">
                <SkillsCard/>
                  <div id="currently-learning" className='flex-center column'>
                    <h3>Current Learning</h3>
                    <p>npm</p>
                    <img className='code-icon' src={codingIcons.sass.icon} alt="Sass icon" />
                  </div>  
                </div>
              </div>
            </ParallaxLayer>
          </section>

      <section id='projects-section' className='flex-center'>
        <ParallaxLayer speed={0.2} className='flex-center' offset={2}>
          <div className="clouds-1">
            <img src={backgroundClouds[5]} className='cover' alt="Clouds" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.4} className='flex-center' offset={2}>
          <div className="clouds-2">
            <img src={backgroundClouds[8]} className='cover' alt="Clouds" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.4} className='flex-center' offset={2}>
          <div className="clouds-2">
            <img src={backgroundClouds[6]} className='cover' alt="Clouds" />
          </div>
        </ParallaxLayer>

          <ParallaxLayer speed={0.5} className='flex-center ' offset={2}>
            <div className="container">
              <header>Projects</header>
                <ProjectCard/>
              <div id="projects-container">
              </div>
            </div>
          </ParallaxLayer>
      </section>

      <section id='about-section' className='flex-center'>
          <ParallaxLayer speed={0.4} className='flex-center' offset={3}>
            <div className="clouds-2">
              <img src={backgroundClouds[9]} className='cover' alt="Clouds" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.2} className='flex-center' offset={3}>
            <div className="clouds-1">
              <img src={backgroundClouds[7]} className='cover' alt="Clouds" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.7} className='flex-center' offset={3}>
            <div className="clouds-1">
              <img src={backgroundClouds[1]} className='cover darker img-left' alt="Clouds" />
              <img src={backgroundClouds[1]} className='cover darker img-right rotate-2' alt="Clouds" />
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer speed={0.8} className='flex-center ' offset={3} >
              <div className="container">
                <header>About Me</header>
                <div id="about-left">
                  <p>While I'm not coding I enjoy hiking, video games, cooking, and art! One of the reason I fell in love with frontend dev is the
                     fact that I can itch my creative soul! Every project I see as a piece of art that I bring into the world.</p>
                </div>
                <div id="about-right"></div>
              </div>
            </ParallaxLayer>
      </section>

      <section id='contact-section' className='flex-center'>
      
          <ParallaxLayer speed={0.2} className='flex-center' offset={4}>
            <div className="clouds-1">
            {/* <img src={backgroundClouds[10]} className='cover' alt="Clouds" /> */}
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.2} className='flex-center' offset={4}>
            <div className="clouds-1">
              <img src={backgroundClouds[12]} className='cover' alt="Clouds" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.4} className='flex-center' offset={4}>
            <div className="clouds-2">
              <img src={backgroundClouds[11]} className='cover' alt="Clouds" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.4} className='flex-center' offset={4}>
            <div className="clouds-1">
              <img src={backgroundClouds[13]} className='cover ' alt="Clouds" />
            </div>
          </ParallaxLayer>

          <ParallaxLayer speed={0.6} className='flex-center ' offset={4}>
            <div className="container">
              <header>Contact</header>
              <div id="contact-info-container">
                <h2>HTChris.ha@gmail.com</h2>
                <div id="social-container">
                </div>
              </div>
            </div>
          </ParallaxLayer>
      </section>

      </Parallax>
    
    </main>
   
    </>

  )
}

export default App
