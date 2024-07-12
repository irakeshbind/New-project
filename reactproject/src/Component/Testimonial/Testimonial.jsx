import React, { useRef } from 'react'
import './Testimonial.css'
import leftarrow from '../../assets/leftarrow.png'
import rightarrow from '../../assets/rightarrow.png'
import user1 from '../../assets/img37.jpg'
import user2 from '../../assets/img37.jpg'
import user3 from '../../assets/img37.jpg'
import user4 from '../../assets/img37.jpg'
const Testimonial = () => {
    // const slideforward =()=>{
        // const slider = useRef();
              
    //     let tx=0;
    //          i(tx > -50){
    //             tx -=25;
    //          }

    // }
    // const slidebackward =()=>{
    //              if(tx < 0){
    //                 tx += 25;
    //              }
    //              slider.current.style.transform = `translateX(${tx}%)`;
    // }
  return (
    <div className='tetimonial'>
        <img src={leftarrow} alt="" className='next-btn' />
        <img src={rightarrow} alt="" className='back-btn'  />
        <div className="slider">
            <ul>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <div>
                                <h3>William Jackson 1</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eos itaque velit laudantium rerum molestias nulla cum obcaecati error unde natus corrupti consectetur, quos fugit neque aut dolorem quo reiciendis illum laboriosam, provident eius! Dolores delectus facere reprehenderit quos explicabo!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt="" />
                            <div>
                                <h3>William Jackson 2</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eos itaque velit laudantium rerum molestias nulla cum obcaecati error unde natus corrupti consectetur, quos fugit neque aut dolorem quo reiciendis illum laboriosam, provident eius! Dolores delectus facere reprehenderit quos explicabo!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt="" />
                            <div>
                                <h3>William Jackson 3</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eos itaque velit laudantium rerum molestias nulla cum obcaecati error unde natus corrupti consectetur, quos fugit neque aut dolorem quo reiciendis illum laboriosam, provident eius! Dolores delectus facere reprehenderit quos explicabo!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt="" />
                            <div>
                                <h3>William Jacksonn 4</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eos itaque velit laudantium rerum molestias nulla cum obcaecati error unde natus corrupti consectetur, quos fugit neque aut dolorem quo reiciendis illum laboriosam, provident eius! Dolores delectus facere reprehenderit quos explicabo!</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial