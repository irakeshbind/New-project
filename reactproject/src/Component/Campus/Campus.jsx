import React from 'react'
import './Campus.css' 
import gallery1 from '../../assets/img38.jpg'
import gallery2 from '../../assets/img37.jpg'
import gallery3 from '../../assets/img38.jpg'
import gallery from '../../assets/img39.jpg'
// import white from '../../assets/arrow.png'
import arrow from '../../assets/arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery4} alt="" className='campusimg' />
            <img src={gallery2} alt="" className='campusimg' />
            <img src={gallery3} alt="" className='campusimg' />
            <img src={gallery4} alt="" className='campusimg' />
            <img src={gallery4} alt="" className='campusimg' />
            <img src={gallery2} alt="" className='campusimg' />
            <img src={gallery3} alt="" className='campusimg' />
            <img src={gallery4} alt="" className='campusimg' />
        </div>
        <button className='btn1'>See more here<img src={arrow}alt="" classname="arrows" /></button>
    </div>
  )
}

export default Campus