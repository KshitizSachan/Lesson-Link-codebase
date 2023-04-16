import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { getStudentByRegName } from '../redux/action/studentAction'
// import HomeHelper from '../Components/HomeHelper'
import Navbar from '../Components/Navbar/Navbar';
import FacultyDetails from './Faculty/FacultyMainPage/FacultyDetails';

const RecieverUserDetails = (props) => {
    const store = useSelector((store) => store)
    const history = useHistory()
    const dispatch = useDispatch()

    const [registrationNumber, setRegistrationNumber] = useState("")



    useEffect(() => {
        setRegistrationNumber(props.match.params.registrationNumber)
        dispatch(getStudentByRegName(registrationNumber))

    }, [registrationNumber])

    return (
        <div>
            {store.student.isAuthenticated ? <>
                <Navbar bgcolor={'linear-gradient(to bottom right, #001339, #0F3277)'} profile="student" display={"none"} />
                {/* container */}
                <div className="student-receiver" style={{display:"flex",justifyContent: "center", alignItems: "start",marginTop: "6rem"}}>
                <FacultyDetails
                    img={store.student.regNumStudent.avatar}
                    name={store.student.regNumStudent.name}
                    registrationNumber={store.student.regNumStudent.registrationNumber}
                    sendRegistrationNumber={store.student.student.student.registrationNumber}
                    department={store.student.regNumStudent.department}
                    designation={store.student.regNumStudent.section}
                    email={store.student.regNumStudent.email}
                    joiningYear={store.student.regNumStudent.batch}
                    gender={store.student.regNumStudent.gender}
                    year={store.student.regNumStudent.year}
                    facultyMobileNumber={store.student.regNumStudent.studentMobileNumber}
                    profile="student"
                    display={"none"}
                    type="Receiver"
                />
                </div>
            </> : (history.push('/'))}
        </div>

    )
}

export default RecieverUserDetails
