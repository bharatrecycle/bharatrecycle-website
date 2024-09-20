import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png'; // Remove this import if not needed
import facebook_1 from '../../assets/Facebook.png';
import instagram_2 from '../../assets/Instagram.png';
import youtube_3 from '../../assets/Youtube.png';
import gmail_4 from '../../assets/Gmail.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>BHARAT RECYCLE INDIA</h1>
        <p>BharatRecycles Limited is a Waste Recycling and Rubber Manufacturing Company aimed at solving the problem of waste tyres by converting them into reusable rubber moulded products</p>
        
        <div className='social-media'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <img src={facebook_1} alt="Facebook" />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <img src={instagram_2} alt="Instagram" />
          </a>
          <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
            <img src={youtube_3} alt="YouTube" />
          </a>
          <a href='mailto:example@gmail.com' target='_blank' rel='noopener noreferrer'>
            <img src={gmail_4} alt="Gmail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
