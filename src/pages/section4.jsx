import React from 'react';
import '../styles/section4.css'
import step1 from '../assets/Howtouse/Step1.png'
import step2 from '../assets/Howtouse/Step2.png'
import step3 from '../assets/Howtouse/Step3.png'
import step4 from '../assets/Howtouse/Step4.png'
import step5 from '../assets/Howtouse/Step5.png'
import step6 from '../assets/Howtouse/Step6.png'
import step7 from '../assets/Howtouse/Step7.png'
import step8 from '../assets/Howtouse/Step8.png'
import step9 from '../assets/Howtouse/Step9.png'

const section4 = () => {
  return (
    <>
      <div className='section4' id='section4'>
        <div className="sec4-upper d-flex flex-column justify-center align-items-center"><h2>How To Use</h2></div>
        <div className="sec4-lower container"
        >
          <div className="usecard">
            <div className="insidecard1">
              <img className='step1' src={step1} alt="playstore" />
              <p>Step 1: Download <b>NexDot</b> from the Playstore</p></div>
            <div className="insidecard2">
              <img className='step1' src={step2} alt="playstore" />
              <p>Step 2: Allow camera access to unlock AR features</p></div>
            <div className="insidecard3">
              <img className='step1' src={step3} alt="playstore" />
              <p>Step 3: Tap <b>Let's Get Started</b> on the Welcome panel</p></div>
            <div className="insidecard4">
              <img className='step1' src={step4} alt="playstore" />
              <p>Step 4: Click on <b>Sign in with Google</b> on the Login Page</p></div>
            <div className="insidecard5">
              <img className='step1' src={step5} alt="playstore" />
              <p>Step 5: Access your profile panel and tap <b>Start</b> your adventure</p></div>
            <div className="insidecard6">
              <img className='step1' src={step6} alt="playstore" />
              <p>Step 6: Select <b>I have Proceed with AR</b> to continue</p></div>
            <div className="insidecard7">
              <img className='step1' src={step7} alt="playstore" />
              <p>Step 7: Choose your preferred language <b>Hindi/English</b> </p></div>
            <div className="insidecard8">
              <img className='step1' src={step8} alt="playstore" />
              <p>Step 8: Click <b>Open</b>  to experience Augmented Reality or Tap <b>Start</b> to begin the Quiz</p></div>
            <div className="insidecard9">
              <img className='step1' src={step9} alt="playstore" />
              <p>Step 9: Scan the Book pages </p></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default section4
