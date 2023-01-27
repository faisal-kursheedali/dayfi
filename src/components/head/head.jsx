import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setWidth } from '../../app/head'
import {Nav} from '../../util/index'
import "./head.css"


const Head = () => {
  const headState=useSelector(store=>store.headState)
  const appState=useSelector(store=>store.appState)
  const [hover,setHover]=useState(false)
  const dispatch = useDispatch()
  useEffect(()=>{
    window.addEventListener("resize",()=>{
      dispatch(setWidth(window.screen.width))
    })
    return ()=>window.removeEventListener("resize",()=>{
      dispatch(setWidth(window.screen.width))
    });
  },[dispatch])
  const url =appState.darkMode?headState.width<=425?headState.bgimg.sm.dark:headState.bgimg.lg.dark :headState.width<=425?headState.bgimg.sm.light:headState.bgimg.lg.light;
  return (
    <div className="head-container" style={{
      backgroundImage:`url(${url})` 
    }}>
      <div className="head-nav">
        <Nav/>
      </div>
      <div className="head-main"  >
        <div className="head-main-1" style={{color:`${appState.darkMode?"white": "black"}`}}>One api that makes NFTs</div>
        <div className="head-main-2" style={{color:`${appState.darkMode?"white": "black"}`}}>Affordable & liquid.</div>
      </div>
      <div className="head-sub" style={{color:`${appState.darkMode?"rgb(248, 228, 212)": "rgba(0, 0, 0, 0.64)"}`}}>
        Become a bull not a bear, Increase your dapp adoption with dayfi's trailblazing
        non-custodial buy now pay later & renting infrastructure.
      </div>
      <div className="head-btn-container">
      
        <button className="head-btn"
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      onClick={()=>window.open("https://share.hsforms.com/1HV6-N3sNStmtIGY9hoWa7wdr4q5")}
        
        
        style={{backgroundColor:`${appState.darkMode?hover?"black":"#F8E4D4":hover?"#F8E4D4": "black"}`, color:`${appState.darkMode?hover?"#F8E4D4":"black":hover?"black":"#F8E4D4"}`,
        
        borderColor:`${hover?"inherit":"transparent"}`
        
        }}>
          Get early access
        </button>
      </div>
    </div>
  )
}

export default Head