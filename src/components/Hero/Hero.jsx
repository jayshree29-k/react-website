import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container' id='hero'>
            <div className="hero-content">
                <h1>We Ensure Better Education For Your Success</h1>
                <p>Edusity is a leading education platform that offers a wide range of courses and resources to help you learn and grow.</p>
                <button className='btn'>Explore More <img src={arrow} alt="arrow" /></button>
            </div>
        </div>
    )
}

export default Hero