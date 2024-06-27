import React from 'react';
import './home.css';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className='home container' id='home'>
      <div className="hah">
        <div className="home-text">
          <div className="h12">
            <h1>National Seminar on Navigating the Depths:</h1>
          </div>
          <div className="hii">
            <h2>Innovations in Underwater Navigation</h2>
          </div>
          <p className='h3'>Welcome to enthusiastic researchers, scientists, Industries, startups, and engineers to register<br />
           & join the seminar on Innovations in Underwater Navigation</p>
          <h2>June 14, 2024</h2>
          <div className="brochure">
            <ul>
              <li><Link to='register' smooth={true} offset={-260} duration={500}>Register</Link></li>
              <li><a href="https://drive.google.com/file/d/1s3r2ILgfF33l2wSyikZmMNjQxzBM30dk/view" target="_blank" rel="noopener noreferrer">Seminar Brochure</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="compassimg"></div>
    </div>
  );
}

export default Home;
