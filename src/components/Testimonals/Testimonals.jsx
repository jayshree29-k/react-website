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
    const tx = useRef(0);   // ✅ FIXED

    const slideForward = () => {
        if (tx.current > -75) {   // because 4 slides now
            tx.current -= 25;
            slider.current.style.transform = `translateX(${tx.current}%)`;
        }
    }

    const slideBackward = () => {
        if (tx.current < 0) {
            tx.current += 25;
            slider.current.style.transform = `translateX(${tx.current}%)`;
        }
    }

    return (
        <div className='testimonals' id='testimonials'>
            <img src={next_icon} alt="next" className='next-icon' onClick={slideForward} />
            <img src={back_icon} alt="back" className='back-icon' onClick={slideBackward} />

            <div className="slider">
                <ul ref={slider}>
                    {[user1, user2, user3, user4].map((user, i) => (
                        <li key={i}>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user} alt="user" />
                                    <div className="user-details">
                                        <h3>William Jackson</h3>
                                        <p>Edustry, USA</p>
                                    </div>
                                </div>
                                <p>
                                    Choosing the right degree is a pivotal demand to ensure long-term career
                                    satisfaction and financial stability.
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Testimonals;
