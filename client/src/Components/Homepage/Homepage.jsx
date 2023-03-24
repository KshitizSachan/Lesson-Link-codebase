import React from 'react'
// import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import FeatureCard from '../FeatureCards/FeatureCard';
import Footer from '../Footer/Footer';
import './Homepage.css'

const Homepage = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Banner/>
        <FeatureCard/>
        <Footer/>
    </div>
  )
}

export default Homepage;