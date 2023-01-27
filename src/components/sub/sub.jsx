import React from 'react'
import { Partners } from '../../util'
import "./sub.css"

const Sub = () => {
  return (
    <div className="sub-container">
      <div className="sub-head">
      Dayfi ecosystem partners
      </div>
      <div className="sub-partners">
        <Partners/>
      </div>
    </div>
  )
}

export default Sub