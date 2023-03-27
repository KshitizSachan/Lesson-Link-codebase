import React from 'react';
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <div className="footer-wrapper" id='contactUs'>
            <div className="ft-content">
                <div className="contactUs">
                    <div className="f-heading">
                       <h4> Contact Us</h4>
                    </div>
                    <div className="CU-body">
                        <span>
                            <h6>IIIT Dharwad,Ittigati Road,</h6>
                            <h6>Near Sattur Colony,Dharwad - 590001</h6>
                            <h6></h6>
                        </span>
                        <span>
                            <h6>+91 1234567890</h6>
                            <h6>+91 9876543210</h6>
                            <h6>+91 1234567890</h6>
                        </span>
                    </div>
                </div>
                <div className="help">
                    <div className="f-heading">
                        <h4>Help</h4> 
                    </div>
                    <div className="help-body">
                        <h6>FAQ</h6>
                        <h6>Privacy</h6>
                        <h6>Security</h6>
                        <h6>Terms of Services</h6>
                    </div>
                </div>
                <div className="about">
                    <div className="f-heading">
                        <div className="logo">
                            <div className="LL-logo">
                                <img src='https://i.ibb.co/cTSZ3CF/Logo.png' alt="" width="40" height="40" />
                            </div>
                            <a href="#">Lesson Link</a>
                        </div>
                    </div>
                    <div className="about-body">
                        <p>“Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is most important.”
                     <br /> <span style={{marginLeft: '36%'}}>– Bill Gates</span> </p>
                    </div>
                    <div className="social-media">
                        <div className="icons">
                        <div className="icon" ><InstagramIcon style={{fontSize:'36px', margin: '0px 5px'}} /></div>
                        <div className="icon"><LinkedInIcon style={{fontSize:'36px', margin: '0px 5px'}}/></div>
                        <div className="icon"><FacebookIcon style={{fontSize:'36px', margin: '0px 5px'}}/></div>
                        <div className="icon"><TwitterIcon style={{fontSize:'36px', margin: '0px 5px'}} /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">© Copyright Lesson Link</div>
        </div>
    )
}

export default Footer;