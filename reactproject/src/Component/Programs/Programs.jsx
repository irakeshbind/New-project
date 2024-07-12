import React from 'react'
import img1 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img2 from '../../assets/img2.jpg'
import img33 from '../../assets/img33.jpg'
import './Programs.css'
const Programs = () => {
  return (
    <>
   <div className='programs'>
     <div className='program'>
      <img src={img1} alt="" />
      <div className='caption'>
        <img src={img33} alt="" className="logo-n" />

        <p>Post Degree</p>
      </div>
     </div>

     <div className='program'>
      <img src={img3} alt="" />
      <div className='caption'>
        <img src={img33} alt="" className="logo-n" />
        <p>Post Degree</p>
      </div>
     </div>

     <div className='program'>
      <img src={img2} alt="" />
      <div className='caption'>
        <img src={img33} alt=""className="logo-m"/>
        
        <p>Graduvation Degree</p>
      </div>
     </div>
     </div>
     </>
  )
}

export default Programs