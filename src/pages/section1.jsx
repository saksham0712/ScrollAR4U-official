import React from 'react'
import '../styles/Section1.css'
import amd from '../assets/section1/amd.svg'
import fun from '../assets/section1/fun2.png'
import interactive from '../assets/section1/interactive.png'
import story from '../assets/section1/story2.png'
import visualize from '../assets/section1/visualize4.png'
// import vid from '../assets/section1/vid.mp4'

const section1 = () => {
    return (
        <>
            <div className='section1'>
                <div className="upper-sectio1">
                    {/* <video autoPlay muted loop src={vid}></video> */}
                    <h2>Features of our products</h2>
                    <p>ScrollAR4U Technologies is an educational tech company using augmented reality to improve science learning for students.</p>
                </div>
                <div className="lower-sectio1">
                    <div className="container ">
                        <div className="row">

                            <div className="col-sm row-box1">
                                <div className="innerbox-card">

                                <div className="icon-svg"><img src={fun} alt="amd icon" /></div>
                                <div className="card-text">

                                <h3>Fun-filled Learning</h3>
                                <p>Embark on an educational adventure with Fun-filled Learning, where curiosity sparks discovery</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm row-box1">
                                <div className="innerbox-card">

                                <div className="icon-svg"><img src={interactive} alt="amd icon" /></div>
                                <div className="card-text">

                                <h3>Interactive Activites</h3>
                                <p>Engage and explore through Interactive Activities, where hands-on learning leads the way!</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm row-box1">
                                <div className="innerbox-card">

                                <div className="icon-svg"><img src={story} alt="amd icon" /></div>
                                <div className="card-text">

                                <h3>Engaging Storytelling</h3>
                                <p>Dive into Engaging Storytelling, where imagination meets education in every tale</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm row-box1">
                                <div className="innerbox-card">

                                <div className="icon-svg"><img src={visualize} alt="amd icon" /></div>
                                <div className="card-text">

                                <h3>Visual Learning Tool</h3>
                                <p>Unlock learning potential with our Visual Learning Tool, where sight becomes the gateway to knowledge!</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default section1
