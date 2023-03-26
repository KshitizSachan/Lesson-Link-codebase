import React from 'react'
import './Login.css'
import StudentPic from '../../Style/Images/studentPic.svg'

const LoginS = () => {
  return (
    <div className="LoginS-wrapper">
        <div className="LoginS-body">
            <div className="LoginS-left">
                <img src={StudentPic} alt="" />
            </div>
                <div className="Login-stud">Student</div>
            <div className="LoginS-Rg">
                        <div className="SRg-body">
                            <div className="Login-title">
                                <p>Learn</p>
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
    </div>
  )
}

export default LoginS;