import { CharacterSelect } from './components/CharacterSelect'
import { CharacterPage } from './components/CharacterPage'
import { CharacterContextProvider, initialUnitProps } from './components/CharacterContext'
import {Routes, Route} from 'react-router-dom'
import './FELVUP.css'


export const FELVUP = () => {



  return (
    <>
    <CharacterContextProvider>

    <Routes>
      <Route path='/' element={<CharacterSelect /> }/>
      <Route path='/unit/:id' element={<CharacterPage unit={initialUnitProps}/>}/>
    
    </Routes>
    </CharacterContextProvider>
    </>
  )
}


