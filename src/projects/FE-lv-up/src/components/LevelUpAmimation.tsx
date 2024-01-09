import { useContext} from "react"
import { CharacterContext } from "./CharacterContext"

export const LevelUpAnimation = () => {

const {levelAnimation, selectedUnit} = useContext(CharacterContext)

const isPromotion = selectedUnit.startLv === '1' && (selectedUnit.classType=== "normal" ||selectedUnit.classType=== "trainee" ) 
return (

	<>
		{/* <button onClick={startLevelAnimation} className="test-btn">animate</button> */}

	<div className={`lv-up-container ${levelAnimation? '' : 'hide'}`}>
		<div className={`${levelAnimation? 'blackout' : ''}`}></div>
		<div className='animation-bars '>
		<span className={`level-up-animation-bar ${levelAnimation? 'level-up-animation level-bar-animation' : ''}`}></span>
		</div>
	
	<div className={`${levelAnimation? 'level-up-animation' : 'hide'} lv-up-textbox`}>
		
		{isPromotion? 
		<h1 className='lv-up-text'>Promotion!</h1>
		: <h1 className='lv-up-text'>Level Up!</h1>
		}

	</div>
	</div>
	</>

)


}