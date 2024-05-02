import React from 'react'
import NavbarBootstrap from '../../components/Navbar'
import '../../styles/home.css'
import Hero from '../Hero.jsx'
import Section1 from '../section1.jsx'
import Section2 from '../section2.jsx'
import Section3 from '../section3.jsx'
import Section4 from '../section4.jsx'
import ContactForm from '../contactForm.jsx'
const Home = () => {
  return (
    <>
    <div className="whole">
    <NavbarBootstrap />
    <div>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <ContactForm />
    </div>
    </div>
    </>
  )
}

export default Home
