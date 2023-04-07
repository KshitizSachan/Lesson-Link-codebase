import React from 'react';
import './FacultyMainPage.css';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MaleIcon from '@mui/icons-material/Male';
import WorkIcon from '@mui/icons-material/Work';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ClassIcon from '@mui/icons-material/Class';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'

const FacultyDetails = (props) => {
    const department={
        "C.S.E":"Computer Science & Engineering (CSE)",
        "E.C.E":"Electronics and Communication Engineering (ECE)",
        "D.S.A.I":"Data Science and AI (DSAI) "
    }

    return (
        <>
            <div className="faculty-info-card">
                <div className="fac-info-left">
                    <div className="fac-img">
                        {/* <img src="" alt="" /> */}
                        {/* <img className='def' src={props.store.faculty.faculty.faculty.avatar} alt="Card image cap" /> */}
                        {
                            (props.display) ? <>
                                <img className="card-img-top" src={props.store.faculty.faculty.faculty.avatar} alt="Card image cap" />
                            </> : <>
                                <PersonIcon className='def' />
                            </>
                        }
                    </div>
                    <div className="fac-name-code">
                        <h4>{props.store.faculty.faculty.faculty.name}</h4>
                        <p>{props.store.faculty.faculty.faculty.registrationNumber}</p>
                    </div>
                </div>
                <div className="fac-info-right">
                    <div className="fac-right-top">
                        <div className="dep-name">
                            <h4 className='m-0' >{department[props.store.faculty.faculty.faculty.department]}</h4>
                        </div>
                        <div className="fac-designation">
                            {props.store.faculty.faculty.faculty.designation}
                        </div>
                    </div>
                    <div className="fac-right-body">
                        <div className="fdetails-type1">

                            <div className="fac-Pdetails">
                                <CalendarTodayIcon className="icon" />
                                <p>{props.store.faculty.faculty.faculty.dob}</p>
                            </div>
                            <div className="fac-Pdetails">
                                <EmailIcon className="icon" />
                                <p>{props.store.faculty.faculty.faculty.email}</p>
                            </div>
                            <div className="fac-Pdetails">
                                <PhoneIcon className="icon" />
                                <p>{props.store.faculty.faculty.faculty.facultyMobileNumber ?
                                    props.store.faculty.faculty.faculty.facultyMobileNumber : "NA"}</p>
                            </div>
                        </div>
                        <div className="fdetails-type2">
                            <div className="fac-Pdetails">
                                <MaleIcon className="icon" />
                                <p>{props.store.faculty.faculty.faculty.gender ? props.store.faculty.faculty.faculty.gender : "NA"
                                }</p>
                            </div>
                            <div className="fac-Pdetails">
                                <WorkIcon className="icon" />
                                <p>{props.store.faculty.faculty.faculty.joiningYear}</p>
                            </div>
                            <div className="fac-Pdetails">
                                <PermContactCalendarIcon className="icon" />
                                <p>{props.store.faculty.faculty.faculty.registrationNumber}</p>
                            </div>
                        </div>
                    </div>
                    <div className="fac-btns">
                        <Link className="fac-btn" to='/faculty/updateProfile'>Edit Profile</Link>
                        {/* <div className="fac-btn">Edit Profile </div> */}
                        <Link to="/faculty/updatePassword" className="fac-btn">Update Password</Link>
                        {/* <div className="fac-btn">Update Password</div> */}
                    </div>
                </div>
            </div>
            <div className="fac-work-details">
                <div className="fac-sec">
                    <PeopleIcon className='work-icon' />
                    <span>480 Student</span>
                </div>
                <div className="fac-sec">
                    <ClassIcon className='work-icon' />
                    <span>6 Classes</span>
                </div>
                <div className="fac-sec" style={{ border: 0 }}>
                    <PeopleIcon className='work-icon' />
                    <span>8 Lectures</span>
                </div>
            </div>
        </>
    )
}

export default FacultyDetails;