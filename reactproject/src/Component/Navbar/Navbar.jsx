import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/edu.jpeg'
const Navbar = () => {
  const [sticky, setsticky] =useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
         window.scrollY > 50 ? setsticky(true) : setsticky(false);
    })
  },[]);
  return (
    // <nav className= "container ${sticky? 'dark-nav' : ''}}">
    <nav className='container dark-nav'>
    <img src={logo} alt="rakesh" className='logo' />
       <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Camposite</li>
        <li>Testimonial</li>
        <li>Gallery</li>
        <li><button className='btn'>Ontact us</button></li>
       </ul>
    </nav>
  )
}

export default Navbar