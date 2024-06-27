import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0744ff77-e285-44e4-90c1-49be4f747f21");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='contact'>
      <div className="contact-col">
        <h3>Send us message <img src={msg_icon} alt="" /></h3>
        <ul>
          <li><img src={mail_icon} alt="" /><a href="mailto:roshan@iittp.ac.in">roshan@iittp.ac.in</a></li>
          <li><img src={phone_icon} alt="" /> +91-9750447774</li>
          <li><img src={location_icon} alt="" />Dr. Roshan Karan Srivastav Project Director, IITTNiF Associate Professor, IIT Tirupati</li>
        </ul>
        <div className="col2">
          <h2>TIH Office</h2>
          <div className="email-container">
            <img src={mail_icon} alt="" />
            <span className="email-text"><a href="mailto:underwater.navi@iittnif.com">underwater.navi@iittnif.com</a> </span>
          </div>
        </div>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type="tel"  name='phone' placeholder='Enter your mobile number' required/>
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /> </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default contact
