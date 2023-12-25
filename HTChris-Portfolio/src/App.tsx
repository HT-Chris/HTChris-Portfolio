import { Navbar } from './components/Navbar'
import { SkillsCard } from './components/SkillsCard'
import { codingIcons } from './assets/coding icons/CodingIcons'
import { useRef } from 'react'
import { backgroundClouds } from './assets/backgroundClouds/backgroundImages'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function App() {
  
  const ref = useRef()

  // fix snaping into each section
  // set containers for each section

  return (
    <>
    <Navbar/>
    <main className='flex-center'>
        <Parallax pages={5} className=' scroll'>
          <section id='hero-section' className='flex-center column'>
          <ParallaxLayer speed={0.2} className='flex-center '>

            <div className="clouds-1">
              <div className="big-cloud"></div>
              <div className="big-cloud"></div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.4} className='flex-center'>

            <div className="clouds-2">
              <div className="small-cloud"></div>
              <div className="small-cloud"></div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.6} className='flex-center '>

        <div className="container flex-center">

          <header>Bright and Positive</header>
            <p>Self taught frontend developer. positive outlook. craves learning. fell in love with coding</p>
            <button className="btn">Contact Me</button>
          <div id="hero-image"></div>
          </div>
          </ParallaxLayer>
       
        </section>
        <section id='skills-section' className='flex-center'>
        <ParallaxLayer speed={0.2} className='flex-center' offset={1}>

          <div className="clouds-1">
            <div className="big-cloud"></div>
            <div className="big-cloud"></div>
          </div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.4} className='flex-center' offset={1}>

          <div className="clouds-2">
            <div className="small-cloud"></div>
            <div className="small-cloud"></div>
          </div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.6} className='flex-center ' offset={1} onScroll={() => ref.current.scrollTo(1)}>
              <div className="container flex-center column">

              <header>Skills</header>
                <p>Here's a snapshot of my current skill set, but that's just the beginning! My journey involves a perpetual pursuit of knowledge. Whether I'm delving into a new coding language or diving deeper into those I already know, I'm committed to continuous growth and self-improvement. The learning never stops, and I'm always eager to expand my horizons.</p>
                <p>Below are a list of my current skills. Although I'm not stopping here! I am constantly learning whether it's learning a new coding language, sub-language, or honing on the languages i do know, I continue to strive for growth and self-improvement.  </p>
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

      <section id='about-section' className='flex-center'>


            <ParallaxLayer speed={0.2} className='flex-center' offset={2}>

              <div className="clouds-1">
                <div className="big-cloud"></div>
                <div className="big-cloud"></div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.4} className='flex-center' offset={2}>

              <div className="clouds-2">
                <div className="small-cloud"></div>
                <div className="small-cloud"></div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.6} className='flex-center ' offset={2} >
              <div className="container">
                <header>About Me</header>
                <div id="about-left">
                  <p>While I'm not coding i enjoy hiking, video games, cooking, and art! One of the reason i fell in love with frontend dev is the fact that i can itch my creative soul. Every project i see as a piece of art i bring into the world.</p>
                </div>
                <div id="about-right"></div>
              </div>
            </ParallaxLayer>
      </section>

      <section id='projects-section' className='flex-center'>

          <ParallaxLayer speed={0.2} className='flex-center' offset={3}>

            <div className="clouds-1">
              <div className="big-cloud"></div>
              <div className="big-cloud"></div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.4} className='flex-center' offset={3}>

            <div className="clouds-2">
              <div className="small-cloud"></div>
              <div className="small-cloud"></div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer speed={0.6} className='flex-center ' offset={3}>
            <div className="container">
              <header>Projects</header>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem esse non possimus ipsam voluptates eveniet minima, mollitia consequuntur, voluptas iusto rem. Quia error dignissimos quas animi tempore expedita mollitia iste, quibusdam repudiandae! Dolorem, doloremque numquam? Ducimus eligendi quam, ab nihil similique ipsa temporibus ratione sint, at fugiat, asperiores inventore deleniti molestias neque sequi officiis. Quos facilis ea fugit cupiditate ipsum consectetur tempore mollitia! Quasi qui iure est cum eius debitis at optio repellat veniam autem. Repellendus a neque voluptatum est tempore voluptates esse sequi, modi magni unde, soluta iure quia eligendi temporibus quam commodi in. Adipisci ullam fuga ad laboriosam.</p>
              <div id="projects-container">
              </div>
            </div>
          </ParallaxLayer>
      </section>
      <section id='contact-section' className='flex-center'>
      
          <ParallaxLayer speed={0.2} className='flex-center' offset={4}>

            <div className="clouds-1">
              <div className="big-cloud"></div>
              <div className="big-cloud"></div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.4} className='flex-center' offset={4}>

            <div className="clouds-2">
              <div className="small-cloud"></div>
              <div className="small-cloud"></div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer speed={0.6} className='flex-center ' offset={4}>
            <div className="container">
              <header>Contact</header>
              <div id="contact-info-container">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quis magni earum fugiat pariatur! At, omnis consequuntur magni deleniti iusto eos a neque facilis tenetur minima nobis ab impedit natus corporis totam dolor ipsam. Optio laboriosam odio dolore earum odit quia nisi velit praesentium consequatur natus minima omnis, nemo magnam molestias molestiae delectus. Veniam aut iusto aliquam dolorum eligendi quasi atque! Consequatur, doloremque officiis? Eveniet ipsam eius molestias qui aperiam ex dolor pariatur magnam voluptates minus est, reprehenderit, sit expedita aspernatur consequuntur harum nemo neque. Magni culpa eos corporis quidem, est aliquam saepe facere, in aperiam dignissimos tenetur iusto esse?</p>
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
