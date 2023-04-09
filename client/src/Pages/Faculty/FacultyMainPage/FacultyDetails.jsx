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
import { Link } from 'react-router-dom';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import AttendenceIcon from '../../../Style/Icons/Attendence_Icon.svg';
import ConversationIcon from '../../../Style/Icons/conversation_icon.svg';
import SubjectIcon from '../../../Style/Icons/subjects_icon.svg';

const FacultyDetails = (props) => {
    const department = {
        "C.S.E": "Computer Science & Engineering (CSE)",
        "E.C.E": "Electronics and Communication Engineering (ECE)",
        "D.S.A.I": "Data Science and AI (DSAI) "
    }

    return (
        <>
            <div className="faculty-info-card">
                <div className="fac-info-left">
                    <div className="fac-img">
                        {/* <img src="" alt="" /> */}
                        {/* <img className='def' src={props.store.faculty.faculty.faculty.avatar} alt="Card image cap" /> */}
                        {
                            (props.profile) ? <>
                                <img className="card-img-top" src={props.img} alt="Card image cap" />
                            </> : <>
                                <PersonIcon className='def' />
                            </>
                        }
                    </div>
                    <div className="fac-name-code">
                        <h4>{props.name}</h4>
                        <p>{props.registrationNumber}</p>
                    </div>
                </div>
                <div className="fac-info-right">
                    <div className="fac-right-top">
                        <div className="dep-name">
                            <h4 className='m-0' >{department[props.department]}</h4>
                        </div>
                        <div className="fac-designation">
                            {props.designation === "A" ? `Section ${props.designation}` : props.designation}
                        </div>
                    </div>
                    <div className="fac-right-body">
                        <div className="fdetails-type1">

                            <div className="fac-Pdetails">
                                <CalendarTodayIcon className="icon" />
                                <p>{props.dob}</p>
                            </div>
                            <div className="fac-Pdetails">
                                <EmailIcon className="icon" />
                                <p>{props.email}</p>
                            </div>
                            <div className="fac-Pdetails">
                                <PhoneIcon className="icon" />
                                <p>{props.facultyMobileNumber ?
                                    props.facultyMobileNumber : "NA"}</p>
                            </div>
                            {props.profile === "student" ? <>
                                <div className="fac-Pdetails">
                                    <EscalatorWarningIcon className="icon" />
                                    <p>{props.fatherName ?
                                        props.fatherName: "NA"}</p>
                                </div>

                            </> : <></>}
                        </div>
                        <div className="fdetails-type2">
                            <div className="fac-Pdetails">
                                <MaleIcon className="icon" />
                                <p>{props.gender ? props.gender : "NA"
                                }</p>
                            </div>
                            <div className="fac-Pdetails">
                                <WorkIcon className="icon" />
                                <p>{props.joiningYear}</p>
                            </div>
                            <div className="fac-Pdetails">
                                <PermContactCalendarIcon className="icon" />
                                <p>{props.registrationNumber}</p>
                            </div>
                            {props.profile === "student"?
                            <>
                            <div className="fac-Pdetails">
                                <PhoneIcon className="icon" />
                                <p>{props.fatherMobileNumber}</p>
                            </div>
                            </>
                            :<></>}
                        </div>
                    </div>
                    <div className="fac-btns">
                        <Link className="fac-btn" to={props.editProfile}>Edit Profile</Link>
                        {/* <div className="fac-btn">Edit Profile </div> */}
                        <Link to={props.updatePassword} className="fac-btn">Update Password</Link>
                        {/* <div className="fac-btn">Update Password</div> */}
                    </div>
                </div>
            </div>
            <div className="fac-work-details">
                <div className="fac-sec">
                    {props.profile === "faculty"?
                    <>
                    <PeopleIcon className='work-icon'/>
                    <span>480 Students</span>
                    </>
                    :
                    <>
                    <img src={AttendenceIcon} alt="" className='work-icon' />
                    <span>Attendence</span>
                    </>
                    }
                </div>
                <div className="fac-sec">
                {props.profile === "faculty"?
                    <>
                   <ClassIcon className='work-icon'/>
                    <span>6 Classes</span>
                    </>
                    :
                    <>
                    <img src={ConversationIcon} alt="" className='work-icon' />
                    <span>Conversation</span>
                    </>
                    }
                    
                </div>
                <div className="fac-sec" style={{ border: 0 }}>
                {props.profile === "faculty"?
                    <>
                   <PeopleIcon className='work-icon' />
                    <span>8 Lectures</span>
                    </>
                    :
                    <>
                    <img src={SubjectIcon} alt="" className='work-icon' />
                    <span>My Subjects</span>
                    </>
                    }
                    
                </div>
            </div>
        </>
    )
}

export default FacultyDetails;