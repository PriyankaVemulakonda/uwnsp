import React from 'react'
import './loc.css'
const loc = () => {
  return (
    <div className='loc' id='location'>
        <div className="ven">
            <h2>Seminar VENUE:</h2>
            <p>IIT Delhi Research and Innovation Park, New Delhi</p>
        </div>
        <div className="mp">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8689005130304!2d77.18541247495351!3d28.54365998811193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d9a6426d987%3A0x48afdc51e54c8134!2sResearch%20and%20Innovation%20Park%20(RNI)%20-%20IIT%20DELHI!5e0!3m2!1sen!2sin!4v1717938166691!5m2!1sen!2sin" width="600" height="450"  allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="travel">
            <h2>Travel Options to New Delhi</h2>
            <div className="air">
            <p>Near Airport</p>
            <a href="https://maps.app.goo.gl/FnPCh5vWDx12yUBF8">Indira Gandhi International Airport </a></div>
            <div className="road">
            <p>Nearest Railway Station</p>
            <a href="https://maps.app.goo.gl/71oeyMXYdbKAQ6K76">New Delhi Railway Station</a>
            </div>
        </div>


      
    </div>
  )
}

export default loc
