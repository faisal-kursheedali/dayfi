import React ,{useEffect,useState} from 'react'
import "./nav.css"
import { useDispatch, useSelector } from 'react-redux'
import { setDark } from '../../app/app'

const Nav = () => {
  const [screenState,setScreenState]=useState(0)
  const appState = useSelector(store=>store.appState)
  const headState = useSelector(store=>store.headState)
  const dispatch=useDispatch();
  useEffect(()=>{
     setScreenState(prev=>{
      prev=window.screen.width;
     })
  },[window.screen.width])
  return (
    <div className="nav-container">
        <div className="nav-logo">
          <img src={appState.darkMode?headState.logo.dark:headState.logo.light} className="nav-logo-img" alt=""/>
        </div>
        <div className="nav-clr-theme">
          {
            !appState.darkMode?
            <button className="nav-clr-theme-btn nav-clr-theme-dark" onClick={()=>{
              dispatch(setDark(true))
            }}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
            </button>
            : 
            <button className="nav-clr-theme-btn nav-clr-theme-light"onClick={()=>{
              dispatch(setDark(false))
            }}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>
            </button>
            
          }
            
           
        </div>
    </div>
  )
}

export default Nav