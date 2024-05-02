import React from 'react'
import '../styles/Section3.css'
import dino from '../assets/section3/dinosaurs.png';
import monuments from '../assets/section3/monuments.png';
import space from '../assets/section3/Designer.jpeg';
import anatomy from '../assets/section3/Designer2.jpeg';
const section3 = () => {
  return (
    <div className='section3' id='section3'>
 <div className="upper-section3">
                    <h2>Our Products</h2>
                    <p>ScrollAR4U Technologies is an educational tech company using augmented reality to improve science learning for students.</p>
                </div>
                <div className="lower-sectio1">
                    <div className="container ">
                        <div className="row">
                            <div className="col-sm row-box3">
                                <div className="innerbox-card3">

                                <div className="icon-svg2"><img src={space} alt="space adventure" /></div>
                                <div className="card-text">
                                <h2>The Space Adventures</h2>
                                <button className='d-btn btn-dark d-btn-hero'>Learn more</button>
                                </div>
                                </div>
                                </div>
                            <div className="col-sm row-box3">
                                <div className="innerbox-card3">

                                <div className="icon-svg2"><img src={anatomy} alt="anatomy" /></div>
                                <div className="card-text">

                                <h2>Human Anatomy</h2>
                                <button className='d-btn btn-dark d-btn-hero'>Learn more</button>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm row-box3">
                                <div className="innerbox-card3">

                                <div className="icon-svg3"><img src={dino} alt="dino" /></div>
                                <div className="card-text">

                                <h2>Dinosaurs Evolution</h2>
                                <button className='d-btn btn-dark d-btn-hero'>Learn more</button>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm row-box3">
                                <div className="innerbox-card3">

                                <div className="icon-svg3"><img src={monuments} alt="monuments" /></div>
                                <div className="card-text">

                                <h2>Monuments</h2>
                                <button className='d-btn btn-dark d-btn-hero'>Learn more</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
    </div>
  )
}

export default section3
