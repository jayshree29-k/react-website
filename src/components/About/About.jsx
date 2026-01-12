import React from 'react'
import './About.css'
import aboutimg from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({ setShowVideo }) => {
    return (
        <div className='about' id='about'>
            <div className='about-left'>
                <img src={aboutimg} className='about-img' alt="about" />
                <img src={play_icon} className='play-icon' alt="play" onClick={() => setShowVideo(true)} />
            </div>
            <div className='about-right'>
                <h3>About University</h3>
                <h2>Nurturing tomorrow's leaders today</h2>
                <p>Having been in professional services for well over two decades, it has been ingrained into me that in a knowledge business like ours, solutions are agnostic of age, experience or background. With nearly 90% of our people in PwC India under the age of 40, it's important for us to make sure that our future leaders have ample platforms to voice their opinions and make an impact on the way we work.</p>
                <p>With the launch of our NextGen Forum, we're a step closer to having greater generational diversity in the boardroom. The forum gives a platform to millennials, carefully chosen to represent diverse business teams, locations, genders and backgrounds, who discuss business and people related issues with the firms leadership.</p>
                <p>I think this generation has the openness to question a lot of things that many of us would take for granted, without even realising it. Whether it's on LGBTQ+ rights, religious freedom, gender stereotypes, ways of working -- there's always a perspective that helps me challenge my thinking and evolve.</p>
            </div>
        </div>
    )
}

export default About