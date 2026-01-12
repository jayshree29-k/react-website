import React from 'react'
import './Programs.css'
import img1 from '../../assets/program-1.png'
import img2 from '../../assets/program-2.png'
import img3 from '../../assets/program-3.png'
import programIcon1 from '../../assets/program-icon-1.png'
import programIcon2 from '../../assets/program-icon-2.png'
import programIcon3 from '../../assets/program-icon-3.png'

const Programs = () => {
    return (
        <div className='programs'>
            <div className='program'>
                <img src={img1} alt="" />
                <div className="program-content">
                    <img src={programIcon1} alt="" />
                    <h2>Graduation Degree</h2>
                </div>
            </div>
            <div className='program'>
                <img src={img2} alt="" />
                <div className="program-content">
                    <img src={programIcon2} alt="" />
                    <h2>Master's Degree</h2>
                </div>
            </div>
            <div className='program'>
                <img src={img3} alt="" />
                <div className="program-content">
                    <img src={programIcon3} alt="" />
                    <h2>Post Graduation Degree</h2>
                </div>
            </div>
        </div>
    )
}

export default Programs