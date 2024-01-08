
import {useState, createContext, ReactNode} from 'react'
import { unitData, classTree, jobMax, promotionGains } from '../assets/Unit-Data'
import { Link } from 'react-router-dom'
import { CharacterPage } from './CharacterPage'
import statUpAudio from '../assets/audio/Stat point +1.mp3'
import levelUpAudio from '../assets/audio/Level up.mp3'




export type unitNormalType = {
	name: string,
	gender: string,
	startLv:string,
	class: string,
	classType: string,
	images: {
		portrait: string,
		sprite: string,
		promoteOneSprite: string | null,
		promoteTwoSprite: string | null,
		pathOne?:{
            base: string,
            promoteOneSprite?: string,
            promoteTwoSprite?: string },
        pathTwo?:{
            base:string,            
            promoteOneSprite?: string,
            promoteTwoSprite?: string },
        },
	base: {
		hp: string,
		atk: string,
		skl: string,
		spd: string,
		lck: string,
		def: string,
		res: string,
		con: string,
		[key: string]: string;
	},
	growths: { hp: string, atk: string,
		skl: string, spd: string, 
		lck: string, def: string,
	res:string,  [key: string]: string }
}

export type unitTraineeType = {
	name: string,
	gender: string,
	startLv:string,
	class: string,
	classType: string,
	images: {
		portrait: string,
		sprite: string,
		pathOne?:{
            base?: string,
            promoteOneSprite?: string,
            promoteTwoSprite?: string },
        pathTwo?:{
            base:string,            
            promoteOneSprite?: string,
            promoteTwoSprite?: string },
        },
	base: {
		hp: string,
		atk: string,
		skl: string,
		spd: string,
		lck: string,
		def: string,
		res: string,
		con: string,
		[key: string]: string;
	},
	growths: { hp: string, atk: string,
		skl: string, spd: string, 
		lck: string, def: string,
	res:string,  [key: string]: string }
}
type unitType = unitNormalType 

type JobType =   {
	class: string,
	hp: string,
	atk: string,
	skl: string,
	spd: string,
	lck: string,
	def: string,
	res: string,
	mov: string,
	con: string,
	[key:string] : string,
}
type GrowthType =   {
	hp: string,
	atk: string,
	skl: string,
	spd: string,
	lck: string,
	def: string,
	res: string,

	[key:string] :  string,
}

type BaseType =   {
	hp: string,
	atk: string,
	skl: string,
	spd: string,
	lck: string,
	def: string,
	res: string,
	con: string,
	[key:string] :  string,
}
type DisplayType =   {
	lv:string,
	hp: string,
	atk: string,
	skl: string,
	spd: string,
	lck: string,
	def: string,
	res: string,
	con: string,
	[key:string] :  string,
}


type promotionStatsType =  {
	baseClass: string,
	promotedClass: string,
	hp: string,
	atk: string,
	skl: string,
	spd: string,
	def: string,
	res: string,
	con: string,
	mov: string,
	[key:string] :  string,
}

export interface UnitProps{
	unit: unitType
}

export interface StatProps {
	stat:string
}


export const initialUnitProps: unitType = {
	name: '',
	gender: '',
	startLv: '',
	class: '',
	classType: '',
	images: {
		portrait: '',
		sprite: '',
		promoteOneSprite: '',
		promoteTwoSprite: '',
		pathOne:{
            base: '',
            promoteOneSprite: '',
            promoteTwoSprite: '' },
        pathTwo:{
            base: '',            
            promoteOneSprite: '',
            promoteTwoSprite: '' },
	},
	base: {
		hp: '',
		atk: '',
		skl: '',
		spd: '',
		lck: '',
		def: '',
		res: '',
		con: '',
	},
	growths: {
		hp: '',
		atk: '',
		skl: '',
		spd: '',
		lck: '',
		def: '',
		res: '',
	},
  };



type CharacterContextPropviderProps = {
	children: ReactNode
}

type CharacterContext = {
	selectedUnit:unitType ,
	showGrowths: boolean,
	showPromotion: boolean,
	isPromoted: boolean,
	statAnimation: string[],
	levelAnimation: boolean,
	displayedStats: BaseType,
	statIncrease: DisplayType,
	startLevelAnimation: () => void,
	startAnimation: (stat:string) => void,
	selectUnit:(c:string) => void,
	promote:(n:number) => void,
	lvUp:() => void,
	lvUpMulti:(n:number) => void,
	reset:() => void,
	growthHandle:() => void,
	promotionHandle:() => void,
}


unitData.map((unit)=>{
	<Link to={`/unit/${unit.name}`}>
		<CharacterPage unit={unit}/>
	</Link>
})


export const CharacterContext = createContext({} as CharacterContext)



export const CharacterContextProvider = ({children}:CharacterContextPropviderProps) =>{

	const [selectedUnit, setSelectedUnit] = useState<unitType>(initialUnitProps)
	const [displayedStats, setDisplayedStats] = useState<DisplayType>({lv:initialUnitProps.startLv , ...initialUnitProps.base})
	const [statIncrease, setStatIncrease] = useState<DisplayType>({lv:initialUnitProps.startLv , ...initialUnitProps.base})
	const [showGrowths, setShowGrowths]  = useState<boolean>(false)
	const [showPromotion, setShowPromotion]  = useState<boolean>(false)
	const [isPromoted, setIsPromoted] = useState<boolean>(false)
	const [statAnimation, setStatAnimation] = useState<string[]>([])
	const [levelAnimation, setLevelAnimation] = useState<boolean>(false)


	const startLevelAnimation = () =>{
		setLevelAnimation(true)
		AudioPlayer()

		setTimeout(()=>{
			setLevelAnimation(false)
		}, 2200)
	}



	const AudioPlayer= () => {
		new Audio(levelUpAudio).play()
	}

	

	const startAnimation = async (stat:string) =>{

        statAudio()
		setStatAnimation((prev)=>[...prev, stat])
		setTimeout(()=>{
			setStatAnimation([])
			setStatIncrease({lv:initialUnitProps.startLv , ...initialUnitProps.base})
		}, 3300)
	}

    const statAudio = async () => {
        await delay(400)
        new Audio(statUpAudio).play()
    }

    const delay = (ms: number) => {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      };


	const trigger = (u:unitType) =>{

		startLevelAnimation()
		const si: DisplayType =   {
			lv: statIncrease.lv,
			hp: String(parseInt(u.base.hp) - parseInt(displayedStats.hp)),
			atk: String(parseInt(u.base.atk) - parseInt(displayedStats.atk)),
			skl: String(parseInt(u.base.skl) - parseInt(displayedStats.skl)),
			spd: String(parseInt(u.base.spd) - parseInt(displayedStats.spd)),
			lck: String(parseInt(u.base.lck) - parseInt(displayedStats.lck)),
			def: String(parseInt(u.base.def) - parseInt(displayedStats.def)),
			res: String(parseInt(u.base.res) - parseInt(displayedStats.res)),
			con: String(parseInt(u.base.con) - parseInt(displayedStats.con)),
		}
		
		setStatIncrease(si)
		
	
		const keys = Object.keys(initialUnitProps.base)
		let i = 0
		
		keys.map((stat:string) =>{
			
			if(displayedStats[stat] !== u.base[stat] && si[stat] !== '0'){
				const increase = parseInt(u.base[stat]) - parseInt(displayedStats[stat])
				i += 1
				const delay = 2400 + (i * 300)
				
				setTimeout(() =>{
					startAnimation(stat)
					setDisplayedStats((prev) => ({
						...prev,
						[stat]:String(parseInt(prev[stat]) + increase)
					}))
				}, delay)
			}})

	}


	// console.log("s", selectedUnit.base)
	// console.log('d' , displayedStats)

	const selectUnit =(c:string)=>{
		const u = unitData.find( chara => chara.name === c) 
		if(u){
			setDisplayedStats({lv:u.startLv, ...u.base})
		setSelectedUnit(u)
			}
		if(u?.classType==='promoted'){
			setIsPromoted(true)
		}else{
			setIsPromoted(false)
		}
		setShowPromotion(false)
	}

	const promote = (n:number) =>{

		
		
		const tree = classTree.find((tree) => tree.baseClass === selectedUnit.class)
		const curBase = selectedUnit.base
		let newClass:string, newSprite:string, promotionStats:promotionStatsType|undefined, newStats:BaseType | undefined
		let u = {...selectedUnit}
		
				const addPromotionStats = ( modifier:promotionStatsType|undefined) =>{
					if(modifier)
					return {
							hp: eval(curBase.hp + modifier.hp),
							atk: eval(curBase.atk + modifier.atk),
							skl: eval(curBase.skl + modifier.skl),
							spd: eval(curBase.spd + modifier.spd),
							lck: curBase.lck ,
							def: eval(curBase.def + modifier.def),
							res: eval(curBase.res + modifier.res),
							con: eval(curBase.con + modifier.con)
					}
				}

		if(n > 2 ) {return}

		if(selectedUnit.classType === 'promoted'){return}


		if(selectedUnit.classType === 'trainee'){
			let newPromoteOneSprite:string, newPromoteTwoSprite:string
		
			if(n == 1){
				promotionStats = promotionGains.find((job) => job.promotedClass === (tree?.promoteOne + selectedUnit.gender))
				newClass = tree?.promoteOne || ''
				newSprite = selectedUnit.images.pathOne?.base || ''
				newStats = addPromotionStats(promotionStats)
				newPromoteOneSprite = selectedUnit.images?.pathOne?.promoteOneSprite || ''
				newPromoteTwoSprite = selectedUnit.images?.pathOne?.promoteTwoSprite || ''
			}
			if(n == 2){
				promotionStats = promotionGains.find((job) => job.promotedClass === (tree?.promoteTwo + selectedUnit.gender))
				newClass = tree?.promoteTwo || ''
				newSprite = selectedUnit.images.pathTwo?.base || ''
				newStats = addPromotionStats(promotionStats)
				newPromoteOneSprite = selectedUnit.images?.pathTwo?.promoteOneSprite || ''
				newPromoteTwoSprite = selectedUnit.images?.pathTwo?.promoteTwoSprite || ''
			}
			u  = {...u,
				startLv: '1',
				base: newStats||curBase,
			}

			setSelectedUnit((prev) =>({
				...prev,
				class: newClass,
				classType:'normal',
				startLv: '1',
				images:{
				...prev.images	,
				sprite: newSprite,
				promoteOneSprite: newPromoteOneSprite,
				promoteTwoSprite: newPromoteTwoSprite,},
				base: newStats||curBase,
			}))
				setDisplayedStats((prev) =>({...prev, lv:'1'}))
			

		}else{

				if(n == 1){
				promotionStats = promotionGains.find((job) => job.promotedClass === (tree?.promoteOne + selectedUnit.gender))
				newClass = tree?.promoteOne || ''
				newSprite = selectedUnit.images.promoteOneSprite || ''
				newStats = addPromotionStats(promotionStats)
			}
			if(n == 2){
				promotionStats = promotionGains.find((job) => job.promotedClass === (tree?.promoteTwo + selectedUnit.gender))
				newClass = tree?.promoteTwo || ''
				newSprite = selectedUnit.images.promoteTwoSprite || ''
				newStats = addPromotionStats(promotionStats)
			}
			
			setIsPromoted(true)

			u = {...u,
				startLv: '1',
				base: newStats||curBase,
			}
			
			setSelectedUnit((prev) =>({
				...prev,
				class: newClass,
				classType:'promoted',
				startLv: '1',
				images:{
				...prev.images	,
				sprite: newSprite,
				promoteOneSprite: '',
				promoteTwoSprite: '',},
				base: newStats||curBase,
			}))
			setDisplayedStats((prev) =>({...prev, lv:'1'}))

			
		}
		
		
		setShowPromotion(false)
		
		trigger(u)
		
	}

	const lvUp = () =>{
		
		
		if(selectedUnit?.classType === "trainee" && parseInt(selectedUnit.startLv) >= 10){ return}
		
		if(selectedUnit && parseInt(selectedUnit.startLv) < 20){
			
			const n = parseInt(selectedUnit.startLv) + 1

			const u: unitType =  {...selectedUnit,
				startLv: n.toString(),
				base:  {
					hp: statsChange('hp', selectedUnit),
					atk: statsChange('atk', selectedUnit),
					skl: statsChange('skl', selectedUnit),
					spd: statsChange('spd', selectedUnit),
					lck: statsChange('lck', selectedUnit),
					def: statsChange('def', selectedUnit),
					res: statsChange('res', selectedUnit),
					con: selectedUnit?.base.con
				}
			}
			
			setTimeout(() =>{
				startAnimation('lv')
				setDisplayedStats((prev) => ({
					...prev,
					lv:String(parseInt(prev.lv) + 1)
				}))
				
			}, 2100)
			const keys = Object.keys(initialUnitProps.base)
			let i = 0
			
			keys.map((stat:string) =>{
				
				if(displayedStats[stat] !== u.base[stat]){
					const increase = parseInt(u.base[stat]) - parseInt(displayedStats[stat])
					i += 1
					const delay = 2100 + (i * 300)
					
					setTimeout(() =>{
						startAnimation(stat)

						setDisplayedStats((prev) => ({
							...prev,
							[stat]:String(parseInt(prev[stat]) + increase)
						}))
					}, delay)
				}})
				setSelectedUnit(u)
			}
			const si =   {
				lv: statIncrease.lv,
				hp: '1',
				atk: '1',
				skl: '1',
				spd: '1',
				lck: '1',
				def: '1',
				res: '1',
				con: '1',
			}
			setStatIncrease(si)
		startLevelAnimation()
			}	
			
const lvUpMulti = (n:number) =>{
	let num = n
	if(parseInt(selectedUnit.startLv ) + num >= 10 && selectedUnit.classType == 'trainee' ){
		num = 10 - parseInt(selectedUnit.startLv )
	}
	if(parseInt(selectedUnit.startLv ) + num >= 20 && selectedUnit.classType !== 'trainee' ){
		num = 20 - parseInt(selectedUnit.startLv )
	}
	
	if(num == 0){
		return
	}
	
	let u: unitType =  {...selectedUnit	}

	for(let i = 0; i < num; i++){
		u= {...u,
			base:  {
			hp: statsChange('hp', u),
			atk: statsChange('atk', u),
			skl: statsChange('skl', u),
			spd: statsChange('spd', u),
			lck: statsChange('lck', u),
			def: statsChange('def', u),
			res: statsChange('res', u),
			con: selectedUnit?.base.con
		}}
		
	}
		u.startLv = String(parseInt(selectedUnit.startLv) + num)


	setSelectedUnit(u)
	setDisplayedStats((prev) =>({
		...prev,
		lv: String(parseInt(prev.lv) + num)
	}))
	
	trigger(u)
}



const statsChange = (stat:string, chara:unitType) => {
	if(!selectedUnit){return selectedUnit}
    const growth: GrowthType = chara.growths
	const m: JobType | undefined = jobMax.find((j) => j.class === (selectedUnit.class + selectedUnit.gender))
	if(m !== undefined){
		if(parseInt(chara.base[stat]) < parseInt(m[stat])){
			const percent = Math.random() * 100
			const n = parseInt(growth[stat])
	
			if(percent <= n){
				return String(parseInt(chara.base[stat]) + 1)
			}
		}
		
	}	
	return chara.base[stat]
}
		
		



	const reset = () =>{
		const u = unitData.find((chara) => selectedUnit.name === chara.name)
		if(u){
			setDisplayedStats({lv:u.startLv,...u.base})
			setSelectedUnit(u)
			setShowGrowths(false)
			setShowPromotion(false)
			setIsPromoted(false)
		}
	}

	const growthHandle = () => {
		setShowGrowths(!showGrowths)
	}

	const promotionHandle = () => {
		setShowPromotion(!showPromotion)
	}

	const contextValue = {selectUnit, promote, lvUp, lvUpMulti, reset,
		isPromoted, selectedUnit, showGrowths, showPromotion, displayedStats, statIncrease,
		promotionHandle, growthHandle, startAnimation, statAnimation,
		levelAnimation, startLevelAnimation}

	return (
		<CharacterContext.Provider value={contextValue}>
			{children}
		</CharacterContext.Provider>
	)
}