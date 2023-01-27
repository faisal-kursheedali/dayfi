import React from 'react'
import "./newsLetter.css"
const NewsLetter = () => {
  return (
    <div className="nl-container">
      <div className="nl-sm">
      <div className="nl-sm-head">Subscribe to our newsletter!</div>
        <div className="nl-sm-sub">Stay updated on the changes we bring to Web3</div>
        <div className="nl-sm-input-container">
          <input type="text" className='nl-sm-input' placeholder='someone@example.com' />

          <button className="nl-sm-btn" >Submit</button>
        </div>
      </div>
      <div className="nl-lg">
          <div className="nl-lg-conatiner">
            <div className="cl-lg-txt-box">
              <div className="cl-lg-txt-head">Subscribe to our newsletter!</div>
              <div className="cl-lg-txt-sub">Stay updated on the changes we bring to Web3</div>
            </div>
            <div className="cl-lg-input-container">
            <div className="cl-lg-input-box">
              <input type="text" className="cl-lg-input" placeholder='someone@example.com' />
              <div className="cl-lg-btn"><img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAICAYAAAC2wNw9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABBSURBVHgB7ZRBDQAgFELRQhpBmxjFpkZBvBvAz3zb27hyACAwJIescOGUkcu6VFKYiE+RTfaMz1tY7cjuFG63vQGMJToddVXkcAAAAABJRU5ErkJggg==" class="cl-lg-btn-img"/></div>
            </div>
            </div>
              <div className="cl-lg-dummy"></div>
          </div>
      </div>
        
      </div>
  )
}

export default NewsLetter