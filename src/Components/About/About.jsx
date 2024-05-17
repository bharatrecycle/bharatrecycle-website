import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3></h3>
        <h2>All kinds of rubber flooring, eco-friendly footwear and other products</h2>
        <p></p>
        <p>We produce non-slippery rubber mats, rubber rolls, rubber tiles, rubber flooring and eco-friendly footwears. Our rubber products cater for the residential, commercial and industrial sectors</p>
        <p></p>
      </div>
    </div>
  )
}

export default About
