import React, { useEffect, useRef, useState } from 'react';
import './target.css';
import tar from '../../assets/target.png';

const Target = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const targetElement = targetRef.current;

    const handleScroll = () => {
      if (targetElement) {
        const top = targetElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`target ${isVisible ? 'visible' : ''}`} ref={targetRef}>
      <img src={tar} alt="" />
      <div className="t12">
        <ul>
          <li>Marine Engineers and Naval Architects </li>
          <li>Oceanographers and Marine Scientists</li>
          <li>Geospatial and Remote Sensing Specialists .</li>
          <li>Environmental Conservationists </li>
          <li>Underwater Exploration Companies </li>
          <li>Military and Defense Personnel</li>
          <li>Technology Entrepreneurs and Startups </li>
          <li>Investors and Venture Capitalists</li>
          <li>Policy Makers and Regulatory Authorities </li>
          <li>Academic Faculty and Students </li>
          <li>General Public and Technology Enthusiasts </li>
        </ul>
      
        
        </div>
    </div>
  );
};

export default Target;
