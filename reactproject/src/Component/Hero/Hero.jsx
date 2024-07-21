import React from 'react'
import arrow from '../../assets/arrow.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>you Ensure better education for a better world  internstional foregion country</h1>
        <p>Our cutting-edge curriculam is designed  to empower stdudents wwith the knowledge ,skills and expriences need  to excel in the dynamic  field of education</p>
        <button className='btn'>Explore  add more<img src={arrow}alt="" classname="arrows" /></button>
      </div>
      </div>
  )
}

export default Hero