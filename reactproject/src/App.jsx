import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonial from './Component/Testimonial/Testimonial'
const App = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <div className='container'>
        <Title subtitle="OUR your PROGRAM" title="Wht We offer"/>
        <Programs/>
        <About/>
        <Title subtitle="Gallery " title="Campus Phostos"/>
        <Campus/>
        <Title subtitle="Testimonial " title="What Students Says"/>
        <Testimonial/>
        <Title subtitle="Contact us " title="Get in Touch"/>
        </div>
    </>
  )
}

export default App