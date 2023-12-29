import { Parallax, ParallaxLayer } from '@react-spring/parallax'




export const Hero = () => {

    return (
        <Parallax pages={1}>

<ParallaxLayer speed={0.5}>

            <div className="clouds-1">
            <div className="big-cloud"></div>
            <div className="big-cloud"></div>
            </div>
            </ParallaxLayer>
            <ParallaxLayer  speed={0.5}>
    
        <div className="clouds-2">
            <div className="small-cloud"></div>
            <div className="small-cloud"></div>
        </div>

                </ParallaxLayer>
                <ParallaxLayer  speed={0.5}>

            <section id='hero-section' className='flex-center column'>

            <div className="container flex-center">

                <header>Bright and Positive</header>
                <p>Self taught frontend developer. positive outlook. craves learning. fell in love with coding</p>
                <button className="btn">Contact Me</button>
                <div id="hero-image"></div>
                </div>
            
            </section>
            </ParallaxLayer>

        </Parallax>

    )
}