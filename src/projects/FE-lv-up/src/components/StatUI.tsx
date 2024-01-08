import {FC, useContext} from 'react'
import { CharacterContext, StatProps} from './CharacterContext'


export const StatUI : FC<StatProps> = ({stat}) =>{

    
	

    const { displayedStats, statAnimation, statIncrease} = useContext(CharacterContext)
    
    let statFind: string
    
  
    if(stat === 'Str' || stat === 'Mag'){
        statFind = 'atk'
    }else{        
        statFind = stat.toLowerCase()
    }


    return(

        <>

        <div className="stats">
            <div >
            <span className='stat-bar'></span>
            <span className={` stat-bar-progress ${statAnimation.indexOf(statFind) >= 0 ? 'stat-bar-animation' : 'hide'}`}></span>
           
            </div>

            <h3>{stat}</h3>
            <h4>{displayedStats[statFind]}</h4>
            
            <div className={` arrow-container ${statAnimation.indexOf(statFind) >= 0 ? '' : 'hide'}`}>
                <h4 className={`plus ${statAnimation.length !== 0  ? 'plus-animation' : 'hide'}`}>+{statIncrease[statFind]}</h4>
                <div className={` arrow ${statAnimation.length !== 0 ? 'arrow-animation' : 'hide'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50"  height="50" viewBox="0 0 24 24">
                        <path fill='aquamarine' d="m19.707 9.293-7-7a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 5 11h3v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V11h3a1 1 0 0 0 .707-1.707z"  data-name="Up"/>
                    </svg>
                </div>
            </div>
            <div className={` star-container ${statAnimation.indexOf(statFind) >= 0
                 ? '' : 'hide'}`} >
                <svg className='star-icon' xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                    <path  strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" className='star-icon'/>
                </svg>

            </div>
        </div>
        </>
    )
}