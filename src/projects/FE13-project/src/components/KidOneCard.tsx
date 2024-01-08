import {  ClassSprites, SkillIcons } from "../assets/fe-child-files/Awakening-image-library"
import {useContext, useState} from 'react'
import { PairingContext } from "./PairingContext"


export const  KidOneCard = () => {

  
  const [tab, setTab] = useState('classes')
  const {childOneData} = useContext(PairingContext)

  
  const tabSelect = (tabMode:string) =>{
    setTab(tabMode)
  }
  


	return (
		<div className="unit-select child-unit">
      <div className="unit-card-left">
        <div className="portrait-container">
          <img className="portrait" src={childOneData.portrait} alt={`${childOneData.name} Portrait`} />
        </div>
          <div>
          <div className="name-header">
            <h3>{childOneData.name}</h3>
            <img src={childOneData.sprite} alt="" />
          </div>
        </div>
      </div>

      <div className="unit-card-right">
      <div className={`btn-tabs `}>
          <button className={`tab ${tab === 'classes' ? '' : 'tab-bottom-border'}`} onClick={()=>tabSelect('classes')}>Classes</button>
          <button className={`tab ${tab === 'skills' ? '' : 'tab-bottom-border'}`} onClick={()=>tabSelect('skills')}>Skills</button>
          <button className={`tab ${tab === 'inherit' ? '' : 'tab-bottom-border'}`} onClick={()=>tabSelect('inherit')}>Inherit</button>
        </div>

        <div className={`unit-details ${tab === 'classes' ? '' : 'hide'}`}>
        
            <div className="icons-container">

          {childOneData.classes.map((c, index) => {
            const t = c
            c = ClassSprites[c.replace(/ /g, '') + '_' + childOneData.sex]
            if(c == undefined) return
            return(
              <div className="sprite-container" key={index}>
                <img className="sprite-img" src={c} alt="class" />
                <div className="details"> 
                  <p>{t}</p>
                  </div>
            </div>)
          })}
            </div>
          </div>

          <div className={`unit-details ${tab === 'skills' ? '' : 'hide'}`}>
      
            <div className="icons-container">
          {childOneData.skills.map((s, index) => {
                const t = s
                const e = SkillIcons[s?.replace('+','Plus').replace(/ /g,'')]?.effect
                s = SkillIcons[s?.replace('+','Plus').replace(/ /g,'')]?.icon
                  if(s == undefined) return
                return(
                  <div className="sprite-container" key={index}>
                    <img className="sprite-img"  src={s} alt="skill" />
                    <div className="details">
                      <p>{t}</p>{e}
                      </div>
            </div>)
          })}
          </div>
          </div>

          <div className={`unit-details ${tab === 'inherit' ? '' : 'hide'}`}>
        <h3 className={`${childOneData.inherited.length === 0 ? '' : 'hide'}`}>Can learn all skills parents can learn</h3>
              
              <div className="icons-container">
              {Array.isArray(childOneData.inherited) &&
              childOneData.inherited.map((s:string, index:number) => {
                 const t = s
                 const e = SkillIcons[s?.replace('+','Plus').replace(/ /g,'')]?.effect
                  s = SkillIcons[s?.replace('+','Plus').replace(/ /g,'')]?.icon
              if(s == undefined) return
                return(
              <div className="sprite-container" key={index}>
                <img className="sprite-img"  src={s} alt="skill" />
                <div className="details">
                      <p>{t}</p>{e}
                      </div>
            </div>)
          })}
           </div>
            </div>
      </div>


    </div>
	)
}