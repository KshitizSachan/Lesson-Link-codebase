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

const FacultyDetails = () => {
    return (
        <>
            <div className="faculty-info-card">
                <div className="fac-info-left">
                    <div className="fac-img">
                        {/* <img src="" alt="" /> */}
                        <PersonIcon className='def' />
                    </div>
                    <div className="fac-name-code">
                        <h4>test_faculty</h4>
                        <p>FAC202301001</p>
                    </div>
                </div>
                <div className="fac-info-right">
                    <div className="fac-right-top">
                        <div className="dep-name">
                            <h4 className='m-0' >Computer Science & Engineering (CSE)</h4>
                        </div>
                        <div className="fac-designation">
                            Assistant Professor
                        </div>
                    </div>
                    <div className="fac-right-body">
                        <div className="fdetails-type1">

                            <div className="fac-Pdetails">
                                <CalendarTodayIcon className="icon" />
                                <p>02-01-2022</p>
                            </div>
                            <div className="fac-Pdetails">
                                <EmailIcon className="icon" />
                                <p>testfacuclty77@gmail.com</p>
                            </div>
                            <div className="fac-Pdetails">
                                <PhoneIcon className="icon" />
                                <p>+91 9876543210</p>
                            </div>
                        </div>
                        <div className="fdetails-type2">
                            <div className="fac-Pdetails">
                                <MaleIcon className="icon" />
                                <p>M</p>
                            </div>
                            <div className="fac-Pdetails">
                                <WorkIcon className="icon" />
                                <p>2023</p>
                            </div>
                            <div className="fac-Pdetails">
                                <PermContactCalendarIcon className="icon" />
                                <p>FAC202301001</p>
                            </div>
                        </div>
                    </div>
                    <div className="fac-btns">
                        <div className="fac-btn">Edit Profile </div>
                        <div className="fac-btn">Update Password</div>
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