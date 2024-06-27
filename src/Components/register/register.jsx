import React from 'react'
import './register.css'
const register = () => {
  return (
    <div className='register' id='register'>
        <div className="reg-main">
      <h1>Registration Fee</h1>
      <ul>
        <li>Startups/Researchers/Faculty: ₹ 3000/-</li>
        <li>Industry/Indian Government/PSU/: ₹ 5000/-</li>
      </ul>
      <h2>Instructions for Registration:</h2>
      <ul>
        <li>Save the transaction reference number, and a screenshot of your transaction, and fill out the google form by clicking the below registration link</li>
        <li>Upon verifying the payment details, the registered participants will be sent a confirmation email within two working days.</li>
      </ul>
      </div>
      <div className="form">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdpEACmyaDVi7zXoqBJpVt4xsQRNymoblpjpNev1UNGrFPjsg/viewform" target="_blank" rel="noopener noreferrer" id="rf">Registration Form</a>  
       </div>
      
    </div>
    
  )
}

export default register
