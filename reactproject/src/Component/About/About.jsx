import React from 'react'
import './About.css'
import img34 from '../../assets/mm2.jpg'
import img35 from '../../assets/play-icon.jpeg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
        <img src={img34} alt="" className='aboutimg' />
        <img src={img35} alt="" className='play-icon' />
    </div>
    <div className="abou-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Naturing Tommorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, id ea rem vel necessitatibus veniam quod impedit! Modi tempora, ea hic quos minima explicabo autem facere dolore dicta! Officiis sit tempora dolorum, incidunt sed laboriosam corporis quam neque animi suscipit pariatur aliquid sint velit temporibus. Deserunt voluptatibus eaque nobis voluptatum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, id ea rem vel necessitatibus veniam quod impedit! Modi tempora, ea hic quos minima explicabo autem facere dolore dicta! Officiis sit tempora dolorum, incidunt sed laboriosam corporis quam neque animi suscipit pariatur aliquid sint velit temporibus. Deserunt voluptatibus eaque nobis voluptatum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, id ea rem vel necessitatibus veniam quod impedit! Modi tempora, ea hic quos minima explicabo autem facere dolore dicta! Officiis sit tempora dolorum, incidunt sed laboriosam corporis quam neque animi suscipit pariatur aliquid sint velit temporibus. Deserunt voluptatibus eaque nobis voluptatum!</p> 
    </div>
    </div>
    
  )
}

export default About