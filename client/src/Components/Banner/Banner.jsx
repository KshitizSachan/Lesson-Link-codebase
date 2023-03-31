import React from 'react'
import './Banner.css'
import Navbar from '../Navbar/Navbar.jsx'
import BannerPic from '../../Style/Images/bannerPic.svg'

const Banner = () => {
    return (
        <div className='banner-wrapper'>
            <Navbar />
            <div className="banner-main-content">
                <div className="banner-left">
                    <div className="banner-text">
                        <span className='banner-Word'>Create</span> and <span className='banner-Word'>Share</span> your knowledge while <span className='banner-Word'>Tracking </span>your learning journey with ease.
                        {/* <span className='banner-Word'>Creating</span>, <span  className='banner-Word'>Sharing</span> and <span className='banner-Word'>Tracking</span> your education has never been easier. */}
                    </div>
                    <a href="#login" style={{textDecoration:"none", scrollBehavior:"smooth"}}>
                        <div className="banner-btn" >
                            <button className='b-btn'>Lets Start</button>
                        </div>
                    </a>
                    <div className="banner-circle"></div>
                </div>
                <div className="banner-right">
                    <img src={BannerPic} alt="" className='banner-pic' />
                </div>
            </div>
        </div>
    )
}

export default Banner;