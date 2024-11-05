import React from 'react'
import './foot.css'

import iit from '../../assets/iittlogo.png'
import log from '../../assets/logo2.png'
import nm from '../../assets/nmicps.png'
import lg from '../../assets/logo.png'
const foot = () => {
  return (
    <div className='foot'>
     
        <div className="logo-container">
            <div className="logo-box">
            <img src={iit} alt="" />
            </div>
            <div className="logo-box">
            <img src={lg} alt="" />
            </div>
            <div className="logo-box">
            <img src={nm} alt="" />
            </div>
            <div className="logo-box">
            <img src={log} alt="" />
            </div>
        </div>

    </div>
  )
}

export default foot
