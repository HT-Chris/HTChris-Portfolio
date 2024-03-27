
import './dadJokes.css'
import {useState, useEffect} from 'react'

function App() {
  const [jokeList, setJokeList] = useState(["poop"])
  const [currentJoke, setCurrentJoke] = useState(0)
  const [colorTheme, setColorTheme] = useState('')
  const [darkMode, setDarkMode] = useState(false)


  useEffect(() =>{
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://icanhazdadjoke.com/', {
          headers: {
            Accept: 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch joke');
        }

        const data = await response.json();
        console.log(data)
        setJokeList(prev => [...prev, data.joke]);
      } catch (error) {
        console.error('Error fetching joke:', error);
      }
    };

    fetchJoke();

  }, []); 

  const getJoke = ()  =>{
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://icanhazdadjoke.com/', {
          headers: {
            Accept: 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch joke');
        }

        const data = await response.json();
        console.log(data)
        setJokeList(prev => [...prev, data.joke]);
      } catch (error) {
        console.error('Error fetching joke:', error);
      }
    };

    fetchJoke();
    setCurrentJoke(prev => prev + 1)

  }


  const colorThemeChange = (color:string) =>{
    setColorTheme(color)
  }

  const modeChange = () => {
    setDarkMode(!darkMode)
  }

  const jokeListChange = (str:string) =>{
    if (jokeList.length === 0)return

    if (str == 'next'){
      setCurrentJoke(prev => prev +1)
    } else{
      setCurrentJoke(prev => prev - 1 || 0)
    }
  }

 const pageStyle = {

 }

  return (
    <>

      <div id="color-toggle" style={pageStyle}>
        <button className="color-btn" onClick={()=>colorThemeChange('a')}>warm</button>
        <button className="color-btn" onClick={()=>colorThemeChange('a')}>cool</button>
        <button className="color-btn" onClick={()=>colorThemeChange('a')}>grey</button>
        <button className="color-btn" onClick={()=>colorThemeChange('a')}>random</button>
        <button id="dark-mode-button" onClick={()=>modeChange()}>toggle</button>
      </div>
      <div id="dad-joke-main">
        <h1>{jokeList[currentJoke]}</h1>
      <div id="joke-btns">
        <button onClick={()=>jokeListChange('back')}>back</button>
        <button onClick={()=>getJoke()}>get</button>
        <button onClick={()=>jokeListChange('next')}>next</button>
      </div>
      </div>
 
    </>
  )
}

export default App
