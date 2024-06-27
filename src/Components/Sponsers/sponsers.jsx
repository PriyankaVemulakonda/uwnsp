import React, { useEffect, useRef } from 'react';
import './sponsers.css';
import platinum from '../../assets/platinum.png';
import gold from '../../assets/gold.png';
import silver from '../../assets/silver.png';
import bronze from '../../assets/bronze.png';

const Sponsers = () => {
  const sponsersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    const currentElement = sponsersRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div className='sponsers' id='sponsers' ref={sponsersRef}>
      <p className='txt'>The sponsorship packages are designed for industry leaders and provide significant impact through pervasive affiliation with the convention and key positioning for you as a sponsor. You are invited to exhibit your product or solutions at this prestigious event.</p>
      <div className="spo-main">
        <h2>PLATINUM Sponsorship: INR 6,00,000/- (*exclusive of taxes)</h2>
      </div>
      <div className="spo2">
        <ul>
          <li>Company logo with a 200-word company profile on the home page of the conference website, hyperlinked to the company website.</li>
          <li>Company logo on the conference halls' main backdrop & the sponsor panel.</li>
          <li>Company logo in advertisements, wherever applicable.</li>
          <li>27 Sqm booth in the Exhibition Area at the venue - Octanorm shell scheme.</li>
          <li>Complimentary of 4 registration passes.</li>
          <li>Acknowledgment of your sponsorship at the conference opening and closing speech.</li>
        </ul>
        <img src={platinum} alt="" className='pt' />
      </div>
      <div className="spo-main">
        <h2>GOLD Sponsorship: INR 4,00,000/- (*exclusive of taxes)</h2>
      </div>
      <div className="spo2">
        <ul>
          <li>Company logo with 150-word company profile on the home page of the conference website, hyperlinked to the company website.</li>
          <li>Company logo on the conference halls main backdrop & the sponsor panels.</li>
          <li>Company logo in advertisements, wherever applicable.</li>
          <li>18 Sqm booth in Exhibition Area at the venue (physical) - Octanorm shell scheme.</li>
          <li>Complimentary of 3 registration passes.</li>
          <li>Acknowledgment of your sponsorship at the conference opening and closing speech.</li>
        </ul>
        <img src={gold} alt="" className='gd' />
      </div>
      <div className="spo-main">
        <h2>SILVER Sponsorship: INR 2,00,000/- (*exclusive of taxes)</h2>
      </div>
      <div className="spo2">
        <ul>
          <li>Company logo with 100-word company profile on the home page of the conference website.</li>
          <li>Company logo on the conference halls' main backdrop & the sponsor panels in.</li>
          <li>Company logo in advertisements, wherever applicable.</li>
          <li>09 Sqm booth in the Exhibition Area at the venue - Octanorm shell scheme.</li>
          <li>Complimentary 2 registration passes.</li>
          <li>Acknowledgment of your sponsorship at the conference opening & closing speech.</li>
        </ul>
        <img src={silver} alt="" className='sl' />
      </div>
      <div className="spo-main">
        <h2>BRONZE SPONSORSHIP: ₹50,000 - ₹1,00,000 (exclusive of taxes)</h2>
      </div>
      <div className="spo2">
        <ul>
          <li>Company logo with a 50-word company profile on the home page of the conference website.</li>
          <li>Company logo on the conference hall's main backdrop & sponsor panels.</li>
          <li>Company logo in advertisements, wherever applicable.</li>
          <li>Complimentary 1 registration pass.</li>
        </ul>
        <img src={bronze} alt="" className='bz' />
      </div>
      <div className="brochure">
        <p>For Sponsorship/Exhibition: <span className="email"><a href="mailto:underwater.navi@iittnif.com">underwater.navi@iittnif.com</a></span></p>
      </div>
    </div>
  );
};

export default Sponsers;
