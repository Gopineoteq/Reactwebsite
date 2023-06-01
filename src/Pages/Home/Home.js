import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from './Components/Hero'
import "../Home/HomeStyle.css"
import About from './Components/About'
import Services from './Components/Services'
import CallToaction from './Components/CallToaction'
import Footer from '../../Components/Footer/Footer'




const Home = () => {
  return (
    <div>
      <Navbar />
   <Hero />
   <About />
  <Services/>
  <CallToaction/> 
  <Footer />
  </div>
  )
}

export default Home