import React, { useEffect, useRef, useState } from 'react';
import './about.css';
import inn from '../../assets/Innovation.jpg';

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = aboutRef.current;
      if (aboutElement) {
        const top = aboutElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check when component mounts
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`about ${isVisible ? 'visible' : ''}`} ref={aboutRef}>
      <div className="about-text">
        <h1>IIT Tirupati Navavishkar I-Hub Foundation (IITTNiF)</h1>
        <p>Positioning and Precision Technologies (PPTs) are indispensable tools for monitoring, integrating, and analyzing spatially and temporally distributed resources to aid in effective decision-making across multiple domains. These technologies include remote sensing (non-invasive), Geographical Information Systems (GIS) and Global Positioning Systems (GPS). The Technology Innovation Hub (TIH) primarily focuses on Public Private Partnership (PPP) model to generate revenue through (i) Research and development sponsorship from industries, government, and start-ups in the form of innovative products and services in PPT; (ii) linkage with industries, accelerators and Venture Capital to create funding ecosystem; (iii) training and consulting; (iv) standards development and policy creation for rapid adaptation of PPT across various stakeholders; and (v) databank creation across strategic areas of PPT. IIT Tirupati Navavishkar I-Hub Foundation (IITTNiF), a not-for-profit Section-8 company, is set up to host the Technology Innovation Hub (TIH) in Positioning and Precision Technologies (PPT). For more details please visit: <a href="https://iittnif.com">https://iittnif.com</a></p>
        <h3>Major Objectives of TIH:</h3>
        <ul>
          <li>Technology Development</li>
          <li>Human Resources and Skill Development</li>
          <li>Start-up Ecosystem</li>
          <li>International Collaboration</li>
        </ul>
        <h3>Core Areas:</h3>
        <p>Atomic Clock, Defense, Indoor Navigation, Radio Frequency, Data Science, Image Processing</p>
        <h3>Applied Areas:</h3>
        <p>Precision Agriculture, Disaster Management, Navigation, Smart Cities and Villages, Policy and Legal Framework</p>
      </div>
      <div className="about-img">
        <img src={inn} alt="" />
      </div>
    </div>
  );
};

export default About;
