import React from 'react'
import './FeatureCard.css'
import SingalCard from './SingalCard';

const FeatureCard = () => {
  return (
    <>
    <div className="FeatureCard-wrapper">
      <div className="FCard-heading">
        <p>FEATURES</p>
      </div>
      <SingalCard/>
    </div>
    </>
  )
}

export default FeatureCard;