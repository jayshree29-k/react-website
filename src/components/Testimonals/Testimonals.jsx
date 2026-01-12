import React, { useRef } from 'react'
import './Testimonals.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonals = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
            slider.current.style.transform = `translateX(${tx}%)`;
        }
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
            slider.current.style.transform = `translateX(${tx}%)`;
        }
    }


    return (
        <div className='testimonals' id='testimonials'>
            <img src={next_icon} alt="next" className='next-icon' onClick={slideForward} />
            <img src={back_icon} alt="back" className='back-icon' onClick={slideBackward} />

            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="user" />
                                <div className="user-details">
                                    <h3>William jackson</h3>
                                    <p>Edustry, USA</p>
                                </div>
                            </div>
                            <p>Choosing the right degree is a pivotal,  demand to ensure long-term career satisfaction and financial stability. It requires thorough research into industry trends, academic program structures, and potential return on investment (ROI). </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt="user" />
                                <div className="user-details">
                                    <h3>William jackson</h3>
                                    <p>Edustry, USA</p>
                                </div>
                            </div>
                            <p>Choosing the right degree is a pivotal,  demand to ensure long-term career satisfaction and financial stability. It requires thorough research into industry trends, academic program structures, and potential return on investment (ROI). </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user3} alt="user" />
                                <div className="user-details">
                                    <h3>William jackson</h3>
                                    <p>Edustry, USA</p>
                                </div>
                            </div>
                            <p>Choosing the right degree is a pivotal,  demand to ensure long-term career satisfaction and financial stability. It requires thorough research into industry trends, academic program structures, and potential return on investment (ROI). </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt="user" />
                                <div className="user-details">
                                    <h3>William jackson</h3>
                                    <p>Edustry, USA</p>
                                </div>
                            </div>
                            <p>Choosing the right degree is a pivotal,  demand to ensure long-term career satisfaction and financial stability. It requires thorough research into industry trends, academic program structures, and potential return on investment (ROI). </p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Testimonals