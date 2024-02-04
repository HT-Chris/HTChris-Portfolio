import { magicUser} from '../assets/Unit-Data'
import {useContext, useEffect, FC, useState} from 'react'
import { UnitProps, CharacterContext } from './CharacterContext'
import { useParams} from 'react-router-dom'
import { Promotion } from './Promotion'
import { LevelUpAnimation } from './LevelUpAmimation'
import { StatUI } from './StatUI'


export const CharacterPage :FC<UnitProps>  =()=> {

    const {id} = useParams()
    let atkStat 
    
    const {selectedUnit, selectUnit,lvUpMulti, reset, showGrowths, statAnimation, displayedStats,
        showPromotion, growthHandle, promotionHandle, isPromoted} = useContext(CharacterContext)
    

    const [lvValue, setLvValue] = useState(1);

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleButtonClick = () => {
      setIsButtonDisabled(true);
      lvUpMulti(lvValue)
      
      setTimeout(() => {
        setLvValue(1)
        setIsButtonDisabled(false);
      }, 500);
    };

    const levelHandle = (adjust:string) => {
      if(adjust === 'up'){
          if(selectedUnit.classType === 'trainee' && lvValue >= 10) return
          if( lvValue >= 20) return
          setLvValue( (prev) => prev + 1 );
        }
        if(adjust === 'down'){
            if(lvValue<= 0) return
            
            setLvValue( (prev) => prev - 1 );
      }
    };
  
    // const disabledTimer = setTimeout(() => {
    //         setIsButtonDisabled(false);
       
    //       }, 500);
    
    const promotionBtn = () => {
        setIsButtonDisabled(true);
            promotionHandle()
            setTimeout(() => {
                setIsButtonDisabled(false);
           
              }, 500);
    }

    const growthBtn = () => {
            growthHandle()
            setTimeout(() => {
                setIsButtonDisabled(false);
           
              }, 500);
    }


    const resetBtn = () => {
            reset()
            setTimeout(() => {
                setIsButtonDisabled(false);
           
              }, 500);
    }

    useEffect(()=>{
        setTimeout(() => {
            if(id){
            selectUnit(id)
        }
          }, 800)
    }, [id])
    

    if(id){
    atkStat = magicUser.indexOf(id) === -1
        }


    if(selectedUnit?.name === ''){
        return <div className='stats-page-container'>Loading...</div>
    }
 




  return (
    <>
    <div id='character-page' className='stats-page-container'>
            <LevelUpAnimation/>
            <div className={`promotion-box ${showPromotion ? '': 'hide'}`}>
            <Promotion/>
            </div>
        <div className="stats-page-card">




        <div id="card-top">

            <div id="card-left-top">
                <div id="name"  className='card-div'>
                    <h4>{selectedUnit?.name}</h4>
                </div>
    
            <div className="center">

                <div id="class-lv" className='card-div'>
                    <h4>{selectedUnit?.class}</h4>
                    <div id="lv">
                        <div className={` star-container-level ${statAnimation.indexOf('lv') >= 0
                 ? '' : 'hide'}`}>
                        <svg className='star-icon' xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                            <path  strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" className='star-icon'/>
                        </svg>
                        </div>
                        <h4>Lv</h4>
                        <h4>{displayedStats?.lv}</h4>
                    <span className='progress-line'></span>
                </div>
            </div>
                </div>

            </div>    
            <div id="unit-images">
                <div id="page-sprite">
                    <img src={selectedUnit.images.sprite} alt="selectedUnit Sprite" />
                </div>
                <div id="portrait">
                    <img src={selectedUnit.images.portrait} alt="Unit Portrait" />
                </div>
            </div>

            
        </div>

        <div id="card-bottom">
            <div   className={`card-div growths ${showGrowths? 'hide': ''}`}>
                <div id="stats-left">
                    <div className="stats">
                        <StatUI stat={'HP'}/>
                    </div>
                    <div className="stats">
                        <StatUI stat={atkStat ? 'Str' : 'Mag'}/>
                    </div>
                    <div className="stats">
                    <StatUI stat={'Skl'}/>
                    </div>
                    <div className="stats">
                    <StatUI stat={'Spd'}/>
                    </div>
                </div>

                <div id="stats-right">

                    <div className="stats">
                    <StatUI stat={'Lck'}/>
                    </div>
                    <div className="stats">
                    <StatUI stat={'Def'}/>
                    </div>
                    <div className="stats">
                    <StatUI stat={'Res'}/>
                    </div>
                    <div className="stats">
                    <StatUI stat={'Con'}/>
                    </div>
                </div>
            </div>

            <div className={`card-div growths ${showGrowths? '': 'hide'}`}>
                <div id="stats-left">
                    <div className="stats growth-stats">
                        <h3>HP</h3>
                        <h3>{selectedUnit?.growths.hp}%</h3>
                        <span className='progress-line'></span>
                    </div>
                    <div className="stats growth-stats">
                        <h3>{atkStat ? 'Str' : 'Mag'}</h3>
                        <h3>{selectedUnit?.growths.atk}%</h3>
                        <span className='progress-line'></span>
                    </div>
                    <div className="stats growth-stats">
                        <h3>Skl</h3>
                        <h3>{selectedUnit?.growths.skl}%</h3>
                        <span className='progress-line'></span>
                    </div>
                    <div className="stats growth-stats">
                        <h3>Spd</h3>
                        <h3>{selectedUnit?.growths.spd}%</h3>
                        <span className='progress-line'></span>
                    </div>
                </div>

                <div id="stats-right">

                    <div className="stats growth-stats">
                        <h3>Lck</h3>
                        <h3>{selectedUnit?.growths.lck}%</h3>
                        <span className='progress-line'></span>
                    </div>
                    <div className="stats growth-stats">
                        <h3>Def</h3>
                        <h3>{selectedUnit?.growths.def}%</h3>
                        <span className='progress-line'></span>
                    </div>
                    <div className="stats growth-stats">
                        <h3>Res</h3>
                        <h3>{selectedUnit?.growths.res}%</h3>
                        <span className='progress-line'></span>
                    </div>
                    <div className="stats growth-stats">
                        <h3>Con</h3>
                        <h3>0%</h3>
                        <span className='progress-line'></span>
                    </div>
                </div>
            </div>

          
   

            <div id="btns">
         
                <div id='top-btns'>
                <button className="btn btn-promote" onClick={()=>promotionBtn()} disabled={isPromoted || isButtonDisabled }><h3>Promote!</h3></button>
                <button className={`btn btn-growths ${showGrowths ? 'growth-selected': ''}`} onClick={growthBtn} disabled={isButtonDisabled}><h3>Growths</h3></button>
                <button className="btn btn-reset" onClick={()=>resetBtn()} disabled={isButtonDisabled}><h3>Reset</h3></button>
                </div>
                <div id='level-up-container'>
                    <h3 id='level-display'>{lvValue}</h3>
                    <div id="level-adjust">
                        <button id="increment" className='level-arrow' onClick={()=>levelHandle('up')}>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                                <path fill='yellow' d="m19.707 9.293-7-7a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 5 11h3v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V11h3a1 1 0 0 0 .707-1.707z"  data-name="Up"/>
                            </svg>
                        </button>
                        <button id="decrement" className='level-arrow' onClick={()=>levelHandle('down')}>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                                <path fill='yellow' d="m19.707 9.293-7-7a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 5 11h3v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V11h3a1 1 0 0 0 .707-1.707z"  data-name="Up"/>
                            </svg>
                        </button>
                    </div>
                    <button className="btn btn-level" onClick={()=>handleButtonClick()} disabled={isButtonDisabled}><h3>{lvValue} Level Ups!</h3><p>or class cap</p></button>
                </div>
                
            </div>
        

        </div> 

        </div>
    </div>
    </>
  )
}
