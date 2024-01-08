
import{ unitData } from '../assets/Unit-Data'
import { Character } from './Character'


export const CharacterSelect = () => {



  return (
    <div id='character-select' className='character-select '>
    <h3>Select a Character</h3>

    <div className='character-table'>
      
    {unitData.map((chara, index) =>  <Character key={index} unit={chara}/>)}

    </div>
    </div>
  )
}

