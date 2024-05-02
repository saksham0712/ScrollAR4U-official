import React from 'react'
import '../styles/Hero.css'
import img from '../assets/hero/file.png'
const hero = () => {
    return (
        <div className="complete-bg">

        <div className="hero">
            {/* <img src={bg} alt="hero background" /> */}
            <div className="hero-container">

                <div className="hero-left">
                    <div className="hero-left-div">
                        <h2>We develop magical products for education</h2>
                        <p>ScrollAR4U Technologies is an educational tech company using augmented reality to improve learning for students.</p>
                        <button className='d-btn btn-dark d-btn-hero'>Learn more</button>
                    </div>
                </div>
                <div className="hero-right">
                    <img className='hero-img' src={img} alt="img of AR" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default hero
