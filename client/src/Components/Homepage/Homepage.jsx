import React from 'react'
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import FeatureCard from '../FeatureCards/FeatureCard';
import Footer from '../Footer/Footer';
import './Homepage.css'
import LoginF from '../Login/LoginF'
import LoginS from '../Login/LoginS';

const Homepage = () => {
  return (
    <div id='home' >
        {/* <Navbar/> */}
        <Banner/>
        <FeatureCard/>
        <LoginF/>
        <LoginS/>
        <Footer/>
    </div>
  )
}

export default Homepage;