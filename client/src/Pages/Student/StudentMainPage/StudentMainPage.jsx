import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar';
import Arrow from '../../../Style/Images/Arrow.svg'
import FClassCard from '../../Faculty/FacultyMainPage/FClassCard';
import FacultyDetails from '../../Faculty/FacultyMainPage/FacultyDetails';
import CopyRight from '../../../Components/CopyRight/CopyRight';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { useSelector } from 'react-redux';

const StudentMainPage = () => {
    const store = useSelector((store) => store.student.student.student)

    console.log(store)

    const classData = [
        {
            id: 1,
            branch: "Software Engineering",
            sem: "IV",
            year: "2nd",
            courseCode: "CS002",
            sec: "A",
            color: "#FFD460"
        },
        {
            id: 2,
            branch: "Theory Of Computation",
            sem: "IV",
            year: "2nd",
            courseCode: "CS002",
            sec: "A",
            color: "#1CF5F5"
        },
        {
            id: 3,
            branch: "Ethics",
            sem: "IV",
            year: "2nd",
            courseCode: "CS002",
            sec: "A",
            color: "#8218A8"
        },
        {
            id: 4,
            branch: "Linear Algebra",
            sem: "IV",
            year: "2nd",
            courseCode: "CS002",
            sec: "A",
            color: "#3CB9EF"
        },
        {
            id: 5,
            branch: "Operating Systems",
            sem: "IV",
            year: "2nd",
            courseCode: "CS002",
            sec: "A",
            color: "#0000008a"
        },
        {
            id: 6,
            branch: "Database Management Systems",
            sem: "IV",
            year: "2nd",
            courseCode: "CS002",
            sec: "A",
            color: "#092E43"
        }
    ]

    return (
        <>
            <Navbar bgcolor={'linear-gradient(to bottom right, #001339, #0F3277)'} profile="student" display={"none"} />
            <div className="FMP-wrapper">
                <div className="fmp-top-background">
                    <div><InsertLinkIcon className="Link-icon" /></div>
                    <div className="faculty-details">
                    <FacultyDetails
                            // store={store}
                            img={store.avatar}
                            name={store.name}
                            registrationNumber={store.registrationNumber}
                            department={store.department}
                            designation={store.section}
                            dob={store.dob}
                            email={store.email}
                            facultyMobileNumber={store.studentMobileNumber}
                            gender={store.gender}
                            joiningYear={store.batch}
                            fatherName = {store.fatherName}
                            fatherMobileNumber = {store.fatherMobileNumber}
                            editProfile = '/student/updateProfile'
                            updatePassword ="/student/updatePassword"
                            profile="student"
                            display={"none"} 
                            />
                    </div>
                </div>
                <div className="Fclasses">
                    <div className="fac-classes">
                        <p><span style={{ marginRight: "1rem" }}><img src={Arrow} /></span> My Subjects</p>
                    </div>
                    <div className="Fclasses-cards">
                        {
                            classData.map((item) => {
                                return (
                                    <>
                                        <div className="C-card" key={item.id} style={{ marginRight: "2%", marginBottom: "2rem" }}>
                                            <FClassCard
                                                // item = {item}
                                                color={item.color}
                                                branch={item.branch}
                                                sem={item.sem}
                                                courseCode={item.courseCode}
                                                year={item.year}
                                                sec={item.sec}
                                            />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <CopyRight />
        </>
    )
}

export default StudentMainPage;