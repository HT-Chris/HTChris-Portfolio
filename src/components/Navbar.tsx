import { IParallax } from '@react-spring/parallax';
import { RefObject, useState, useEffect, useRef  } from 'react';
// import   socialMediaNavList  from '../assets/socialMediaIcons/socialIconList'
import logo from '../assets/miscImg/HT Logo copy.png'
import githubIcon from '/src/assets/socialMediaIcons/icons8-github-96.png'
import tiktokIcon from '/src/assets/socialMediaIcons/icons8-tiktok-100.png'
import linkedinIcon from '/src/assets/socialMediaIcons/icons8-linkedin.svg'
import youtubeIcon from '/src/assets/socialMediaIcons/icons8-youtube-100.png'


const socialMediaNavList= [
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


type pScroll = {
    scrollTo: (page: number) => void | null
  }

  type NavbarProps = {
    parallax: RefObject<IParallax>;

    className:string;
  };

export const Navbar = ({ parallax }: NavbarProps) => {
    
const [menuIsOpen, setMenuIsOpen] = useState(false)
const menuRef = useRef<HTMLDivElement>(null)

const openMenu = () => {
    setMenuIsOpen(!menuIsOpen)
    
}

const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

// Update the isMobile state when the window is resized
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  window.addEventListener('resize', handleResize);

  // Clean up the event listener when the component is unmounted
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

useEffect(() => {
    const handleClickOutside = (event: MouseEvent) =>{
        if (menuRef.current && event.target instanceof Node && !menuRef.current.contains(event.target)) {
            setMenuIsOpen(false)
        }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
        document.removeEventListener('mousedown', handleClickOutside)
    }
},[])

    // const scrollToSection = (sectionId: string) => {
    //     const targetSection = document.querySelector(sectionId);
    
    //     if (targetSection) {
    //       targetSection.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   };

      const handleScrollTo = (page:number) => {
        setMenuIsOpen(false)
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
        
        <div id="navbar-main" ref={menuRef} className="flex-center">

            <div id="nav-items-container" className="flex-center">
                <div id="nav-right">
                    <img className='nav-logo' src={logo} alt="logo" />
                    <h3>HT Chris</h3>
                </div>
              
                <ul className={`${isMobile ? 'hide' :''}`}>
                    <li>
                        <a   onClick={() => handleScrollTo(0)}>Home</a>
                    </li>
                    <li>
                        <a   onClick={() => handleScrollTo(.65)}>Skills</a>
                    </li>
                    <li>
                        <a   onClick={() => handleScrollTo(1.35)}>Projects</a>
                    </li>
                    <li>
                        <a onClick={() => handleScrollTo(2.3)}>About Me</a>
                    </li>
                    <li>
                        <a  onClick={() => handleScrollTo(3)} >Contact</a>
                    </li>
                </ul>
            <div className={`social-media-container ${isMobile ? 'hide' :''}`}>
                {socialMediaNavList.map((media, index) => (
                    <a key={index} href={media.link} className={`social-media-links ${media.text === 'Github' ? 'icon-padding' : ''} ${media.text === 'TikTok' ? 'icon-padding-2' : ''}`}>
                    <img className='nav-icon-links' src={media.icon} alt={media.text} />
                    </a>
                ))}
            </div>
            <div className={`mobile-menu ${isMobile ? '' :' hide'}`}>
                <button className='btn-hamburger ' onClick={()=>openMenu()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </button>

                <div id='popup-menu' className={` ${menuIsOpen? '' :'hide'}`}>
                    <button className='btn-close' onClick={()=>openMenu()}>&times;</button>
                <ul className='popup-ul flex-center column'>
                    <li>
                        <a   onClick={() => handleScrollTo(0)}>Home</a>
                    </li>
                    <li>
                        <a   onClick={() => handleScrollTo(.65)}>Skills</a>
                    </li>
                    <li>
                        <a   onClick={() => handleScrollTo(1.35)}>Projects</a>
                    </li>
                    <li>
                        <a onClick={() => handleScrollTo(2.3)}>About Me</a>
                    </li>
                    <li>
                        <a  onClick={() => handleScrollTo(3)} >Contact</a>
                    </li>
                </ul>
                <div className='social-media-container flex-center column'>
                {socialMediaNavList.map((media, index) => (
                    <a key={index} href={media.link} className={`social-media-links ${media.text === 'Github' ? 'icon-padding' : ''} ${media.text === 'TikTok' ? 'icon-padding-2' : ''}`}>
                    <img className='nav-icon-links' src={media.icon} alt={media.text} />
                    </a>
                ))}
            </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}