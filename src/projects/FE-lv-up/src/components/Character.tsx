import {useContext, FC} from 'react'
import { CharacterContext } from './CharacterContext'
import { UnitProps } from './CharacterContext'
import { Link } from 'react-router-dom'


export const Character: FC<UnitProps> = ({unit}):JSX.Element => {

  const {selectUnit} = useContext(CharacterContext)

  return (

    <div className='character-card red-border' onClick={() => selectUnit(unit.name)}>
    <Link to={`/FELVUP/unit/${unit.name}`}>
      <div className="image-container">
        <img src={unit.images.sprite} alt="Character Sprite" />
      </div>
      <h4>{unit.name}</h4>
    </Link>
  </div>
      
    )
  }

