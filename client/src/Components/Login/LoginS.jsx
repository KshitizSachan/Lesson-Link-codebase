import React, { useState, useEffect } from 'react'
import './Login.css'
import StudentPic from '../../Style/Images/studentPic.svg';
import { useSelector, useDispatch } from 'react-redux';
import { studentLogin } from '../../redux/action/studentAction';
import { useHistory, Link } from 'react-router-dom'
import classnames from 'classnames'

const LoginS = () => {
    const store = useSelector((state) => state)
    const dispatch = useDispatch()
    const [studentRegNum, setStudentRegNum] = useState('')
    const [studentPassword, setStudentPassword] = useState('')
    const [isStudentLoading, setIsStudentLoading] = useState(false)

    const [errors, setErrors] = useState({})
    const [errorsHelper, setErrorsHelper] = useState({})

    const history = useHistory()
    
    useEffect(() => {
        if (store.student.isAuthenticated) {
            history.push('/home')
        }
    }, [store.student.isAuthenticated])

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
        if (store.errorHelper ||
            store.student.isAuthenticated) {
            setIsStudentLoading(false)
        }
        else {
            setIsStudentLoading(false)
        }

    }, [store.errorHelper, store.student.isAuthenticated])

    const studentFormHandler = (e) => {
        e.preventDefault()
        let registrationNumber;
        let password;
        setIsStudentLoading(true)
        dispatch(studentLogin({ registrationNumber: studentRegNum, password: studentPassword }))
    }

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
                            <input
                                type="text"
                                placeholder='Registration Number'
                                onChange={(e) => setStudentRegNum(e.target.value)}
                                value={studentRegNum}
                                className={classnames('Login-input', {
                                    'is-invalid': errorsHelper.registrationNumber
                                })}
                            />
                            {errorsHelper.registrationNumber && (
                                <div className="invalid-feedback">{errorsHelper.registrationNumber}</div>
                            )}
                        </div>
                        <div className="Login-input-text">
                            <input
                                type="password"
                                placeholder='Password'
                                onChange={(e) => setStudentPassword(e.target.value)}
                                value={studentPassword}
                                className={classnames("Login-input", {
                                    'is-invalid': errorsHelper.password
                                })}
                                id="passwordId" />
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-1">
                                {
                                    isStudentLoading && <div class="spinner-border text-primary" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                }
                            </div>
                        </div>
                        {!isStudentLoading &&
                            <div className="login-btn ">
                                <button className='lg-btn Login-input' onClick={studentFormHandler}>LogIn</button>
                            </div>
                        }
                        <p className="text-right mt-2"><Link className="text-end text-info " to="/forgotPassword/student">Forgot Password</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginS;


// import React from 'react'
// import './Login.css'
// import StudentPic from '../../Style/Images/studentPic.svg'

// const LoginS = () => {
//     const studentFormHandler = (e) => {
//         e.preventDefault()
//         let registrationNumber;
//         let password;
//         setIsStudentLoading(true)
//         dispatch(studentLogin({ registrationNumber: studentRegNum, password: studentPassword }))
//     }

//   return (
//     <div className="LoginS-wrapper">
//         <div className="LoginS-body">
//             <div className="LoginS-left">
//                 <img src={StudentPic} alt="" />
//             </div>
//                 <div className="Login-stud">Student</div>
//             <div className="LoginS-Rg">
//                         <div className="SRg-body">
//                             <div className="Login-title">
//                                 <p>Learn</p>
//                             </div>
//                             <div className="Login-input-text">
//                                 <input type="text" placeholder='Registration Number' className="Login-input"/>
//                             </div>
//                             <div className="Login-input-text">
//                                 <input type="text" placeholder='Password' className="Login-input"/>
//                             </div>
//                             <div className="login-btn ">
//                                 <button className='lg-btn Login-input'>LogIn</button>
//                             </div>
//                         </div>
//                     </div>
//         </div>
//     </div>
//   )
// }

// export default LoginS;