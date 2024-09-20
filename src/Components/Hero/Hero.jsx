import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>FREEE RECYCLE INDIA</h1>
        <p>BharatRecycles Limited is a Waste Recycling and Rubber Manufacturing Company aimed at solving the problem of waste tyres by converting them into reusable rubber moulded products</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
