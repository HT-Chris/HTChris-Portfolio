

export const Navbar = () => {


    const scrollToSection = (sectionId: string) => {
        const targetSection = document.querySelector(sectionId);
    
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <>
        
        <div id="navbar" className="flex-center">

            <div id="nav-items-container" className="flex-center">

              
                <ul>
                    <li>
                        <a href="#hero-section"  onClick={() => scrollToSection('#hero-section')}>Home</a>
                    </li>
                    <li>
                        <a href="#skills-section"  onClick={() => scrollToSection('#skills-section')}>Skills</a>
                    </li>
                    <li>
                        <a href="#projects-section"  onClick={() => scrollToSection('#projects-section')}>Projects</a>
                    </li>
                    <li>
                        <a href="#about-section"  onClick={() => scrollToSection('#about-section')}>About Me</a>
                    </li>
                    <li>
                        <a href="#contact-section"  >Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}