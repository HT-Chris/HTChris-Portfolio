import { useContext} from "react"
import { CharacterContext } from "./CharacterContext"
import { classTree } from "../assets/Unit-Data"



export const Promotion = () => {

	const {selectedUnit, promote, promotionHandle} = useContext(CharacterContext)

	const isTrainee = selectedUnit.classType === 'trainee' 

    const promotable = Number(selectedUnit.startLv) >= 10 && selectedUnit.classType !== 'promoted'

	const onePath = selectedUnit.images.promoteTwoSprite === null && !isTrainee

	let promoOne, promoTwo

	for(const set of classTree ){
		if(set.baseClass === selectedUnit.class){
			promoOne = set.promoteOne
			promoTwo = set.promoteTwo
		}
	}


  return (

<>
		
	<div className={`promotion-container`}> 

	<div className="current-sprite">
		<img src={selectedUnit.images.sprite} alt={selectedUnit.class} />
		<p>{selectedUnit.class}</p>
	</div>


		<div className="promotion-path">
			<button onClick={()=>promote(1)} className="promo-btn" disabled={!promotable}>
					{isTrainee && (selectedUnit?.images?.pathOne?.base) && (
						<>
							<img src={selectedUnit?.images?.pathOne?.base } alt="Promotion 1" />
							<p>{promoOne}</p>
						</>
				)}			
				
				{!isTrainee && (selectedUnit.images?.promoteOneSprite )&&(
					<>
						<img src={ selectedUnit.images?.promoteOneSprite } alt="Promotion 1" />
						<p>{promoOne}</p>
					</>
					
					) 
				}
			</button>

			<button onClick={()=>promote(2)} disabled={!promotable} className={`promo-btn ${onePath ? 'hide' : '' }`} >
				{ isTrainee ? (
				selectedUnit?.images?.pathTwo?.base && (
					<>
						<img src={selectedUnit?.images?.pathTwo?.base} alt="Promotion 1"/>
						<p>{promoTwo}</p>
					</>)
				) : (
				selectedUnit.images.promoteTwoSprite &&(
					<>
						<img src={selectedUnit.images?.promoteTwoSprite} alt="Promotion 2"/>
						<p>{promoTwo}</p>
					</>)
				)}		

		</button >
	
		</div>
		<div className={`${promotable ? 'hide' : ''}`}>
			<p>
				{selectedUnit.name} must be Lv. 10 or higher to promote
			</p>
		</div>
			<button onClick={promotionHandle} className="back-btn">Back</button>

</div>
</>
  )
}
