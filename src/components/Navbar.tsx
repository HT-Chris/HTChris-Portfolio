import { IParallax } from '@react-spring/parallax';
import { RefObject } from 'react';
import   socialMediaNavList  from '../assets/socialMediaIcons/socialIconList'
import logo from '../assets/miscImg/HT Logo copy.png'


type pScroll = {
    scrollTo: (page: number) => void | null
  }

  type NavbarProps = {
    parallax: RefObject<IParallax>;
    className:string;
  };

export const Navbar = ({ parallax }: NavbarProps) => {

    // const scrollToSection = (sectionId: string) => {
    //     const targetSection = document.querySelector(sectionId);
    
    //     if (targetSection) {
    //       targetSection.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   };

      const handleScrollTo = (page:number) => {
        const pScrolll= parallax.current as unknown as pScroll
        if(pScrolll){
        pScrolll.scrollTo(page);}
      };

      /**
       * logo
       * nav right
       * ul 
       * social
       */

    return (
        <>
        
        <div id="navbar" className="flex-center">

            <div id="nav-items-container" className="flex-center">
                <div id="nav-right">
                    <img className='nav-logo' src={logo} alt="logo" />
                    <h3>HT Chris</h3>
                </div>
              
                <ul>
                    <li>
                        <a   onClick={() => handleScrollTo(0)}>Home</a>
                    </li>
                    <li>
                        <a   onClick={() => handleScrollTo(.99)}>Skills</a>
                    </li>
                    <li>
                        <a   onClick={() => handleScrollTo(1.5)}>Projects</a>
                    </li>
                    <li>
                        <a onClick={() => handleScrollTo(2)}>About Me</a>
                    </li>
                    <li>
                        <a  onClick={() => handleScrollTo(2.5)} >Contact</a>
                    </li>
                </ul>
            <div className="social-media-container">
                {socialMediaNavList.map((media, index) => (
                    <a key={index} href={media.link} className={`social-media-links ${media.text === 'Github' ? 'icon-padding' : ''} ${media.text === 'TikTok' ? 'icon-padding-2' : ''}`}>
                    <img className='nav-icon-links' src={media.icon} alt={media.text} />
                    </a>
                ))}
            </div>
        </div>
        </div>
        </>
    )
}