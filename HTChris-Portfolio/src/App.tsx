import { Navbar } from './components/Navbar'
import { SkillsCard } from './components/SkillsCard'
import { codingIcons } from './assets/coding icons/CodingIcons'

function App() {


  return (
    <>
    <Navbar/>
    <main className='flex-center'>
      <section id='hero-section' className='flex-center'>
        <div className="container">

          <header>Bright and Positive</header>
          <p>Self taught frontend developer. positive outlook. craves learning. fell in love with coding</p>
          <button className="btn">Contact Me</button>
          <div id="hero-image"></div>
          </div>
        </section>
        <section id='skills-section' className='flex-center'>
          <div className="container">

          <header>Skills</header>
          
            <SkillsCard/>
            
          <div id="currently-learning" className='flex-center'>
            
            <h3>Current Learning</h3>
            
              <img className='code-icon' src={codingIcons.sass.icon} alt="Sass icon" />
            </div>  
        </div>
      </section>
      <section id='about-section' className='flex-center'>
        <div className="container">

          <header>About Me</header>
          <div id="about-left">
            <p>While I'm not coding i enjoy hiking, video games, cooking, and art! One of the reason i fell in love with frontend dev is the fact that i can itch my creative soul. Every project i see as a piece of art i bring into the world.</p>
          </div>
          <div id="about-right"></div>
        </div>
      </section>
      <section id='projects-section' className='flex-center'>
        <div className="container">

          <header>Projects</header>
          <div id="projects-container">
  
          </div>
        </div>
      </section>
      <section id='contact-section' className='flex-center'>
        <div className="container">

          <header>Contact</header>
          <div id="contact-info-container"></div>
        </div>
      </section>
    </main>
   
    </>

  )
}

export default App
