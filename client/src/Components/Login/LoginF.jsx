import React, { useState, useEffect } from 'react';
import './Login.css'
import LoginPic from '../../Style/Images/LgPic.svg';
import { useDispatch,useSelector } from 'react-redux';
import { facultyLogin } from '../../redux/action/facultyAction';
import { useHistory, Link } from 'react-router-dom';
import classnames from 'classnames';

const Login = () => {
    const store = useSelector((state) => state)
    const dispatch = useDispatch()
    const [facultyRegNum, setFacultyRegNum] = useState('')
    const [facultyPassword, setFacultyPassword] = useState('')
    const [isFacultyLoading, setIsFacultyLoading] = useState(false);

    const [errors, setErrors] = useState({})
    const [errorsHelper, setErrorsHelper] = useState({})

    const history = useHistory()

    useEffect(() => {
        if (store.faculty.isAuthenticated) {
            history.push('/faculty')
        }
    }, [store.faculty.isAuthenticated])

    useEffect(() => {
        if (store.error) {
            setErrors(store.error)
        }
    }, [store.error])

    useEffect(() => {
        if (store.errorHelper) {
            setErrorsHelper(store.errorHelper)
        }
    }, [store.errorHelper])

    useEffect(() => {
      if (store.error || store.faculty.isAuthenticated) {
          setIsFacultyLoading(false)
      }
      else {
          setIsFacultyLoading(true)
      }
  }, [store.error, store.faculty.isAuthenticated])

    const facultyFormHandler = (e) => {
        e.preventDefault()
        let registrationNumber;
        let password;
        setIsFacultyLoading(true)
        dispatch(facultyLogin({ registrationNumber: facultyRegNum, password: facultyPassword }))
    }

    return (
        <div className="Login-wrapper" id='login'>
            <div className="Login-body">
                <div className="Login-left">
                    <div className="Login-Rg">
                        <div className="Rg-body">
                            <div className="Login-title">
                                <p>Educate</p>
                            </div>
                            <div className="Login-input-text">
                                <input type="text" placeholder='Registration Number'
                                    // className="Login-input"
                                    onChange={(e) => setFacultyRegNum(e.target.value)}
                                    value={facultyRegNum}
                                    className={classnames("Login-input", {
                                        'is-invalid': errors.registrationNumber
                                    })}
                                />
                                {errors.registrationNumber && (
                                    <div className="invalid-feedback">{errors.registrationNumber}</div>
                                )}
                            </div>
                            <div className="Login-input-text">
                                <input placeholder='Password'
                                    // className="Login-input"
                                    onChange={(e) => setFacultyPassword(e.target.value)}
                                    value={facultyPassword}
                                    className={classnames("Login-input", {
                                        'is-invalid': errors.password
                                    })}
                                    type="password"
                                    id="passwordFacId"
                                />
                                {errors.password && (
                                    <div className="invalid-feedback">{errors.password}</div>
                                )}
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-1">
                                    {
                                        isFacultyLoading && <div class="spinner-border text-primary" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    }
                                </div>
                            </div>
                            {!isFacultyLoading && 
                            <div className="login-btn ">
                                <button className='lg-btn Login-input' onClick={facultyFormHandler}>LogIn</button>
                            </div>
                            }
                        </div>
                        <p className="text-right mt-2 " ><Link className="text-center text-info" to="/forgotPassword/faculty">Forgot Password</Link></p>
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