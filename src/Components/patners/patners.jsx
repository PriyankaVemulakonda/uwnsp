import React from 'react'
import './patners.css'
import icreate from '../../assets/icreate.png'
import wadh from '../../assets/wadh.png'
import hea1 from '../../assets/head.png'
import tata from '../../assets/tata.png'
import cmg2 from '../../assets/cmg2.png'

const Patners = () => {
  return (
    <div className='patners' id='patners'>
      <h1>Knowledge Patners</h1>
      <div className="cl1">
        <img src={icreate} alt="icreate" />
        <img src={wadh} alt="wadh" />
        <img src={hea1} alt="hea1" />
      </div>
      <h1>Funding Patners</h1>
      <div className="cl2">
        <img src={tata} alt="tata" />
      </div>
      <h1>Industry Patners</h1>
      <div className="cl3">
        <p>Will be updated soon</p>
        <img src={cmg2} alt="cmg2" />
      </div>
      
      <h1>Media Patners</h1>
      <div className="cl3">
        <p>Will be updated soon</p>
        <img src={cmg2} alt="cmg2" />
      </div>
    </div>
  )
}

export default Patners
