import React from 'react';
import './Login.css'
import LoginPic from '../../Style/Images/LgPic.svg';

const Login = () => {
    return (
        <div className="Login-wrapper">
            <div className="Login-body">
                <div className="Login-left">
                    <div className="Login-Rg">
                        <div className="Rg-body">
                            <div className="Login-title">
                                <p>Educate</p>
                            </div>
                            <div className="Login-input-text">
                                <input type="text" placeholder='Registration Number' className="Login-input"/>
                            </div>
                            <div className="Login-input-text">
                                <input type="text" placeholder='Password' className="Login-input"/>
                            </div>
                            <div className="login-btn ">
                                <button className='lg-btn Login-input'>LogIn</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Login-pic">
                    <img src={LoginPic} alt="" />
                </div>
                <div className="login-fac">Faculty</div>
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
            </div>
        </div>
    )
}

export default Login;