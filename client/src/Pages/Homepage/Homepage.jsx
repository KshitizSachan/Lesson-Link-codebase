import React from 'react'
import Banner from '../../Components/Banner/Banner';
import FeatureCard from '../../Components/FeatureCards/FeatureCard';
import Footer from '../../Components/Footer/Footer';
import LoginF from '../../Components/Login/LoginF'
import LoginS from '../../Components/Login/LoginS';

const Homepage = () => {
  return (
    <div id='home' >
        <Banner/>
        <FeatureCard/>
        <LoginF/>
        <LoginS/>
        <Footer/>
    </div>
  )
}

export default Homepage;