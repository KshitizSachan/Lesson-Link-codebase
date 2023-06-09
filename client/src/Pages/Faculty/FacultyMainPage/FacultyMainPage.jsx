import React from 'react'
import './FacultyMainPage.css'
import Navbar from '../../../Components/Navbar/Navbar';
import Arrow from '../../../Style/Images/Arrow.svg'
import FClassCard from './FClassCard';
import FacultyDetails from './FacultyDetails';
import CopyRight from '../../../Components/CopyRight/CopyRight';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { useSelector } from 'react-redux';


const FacultyMainPage = () => {
    // const history = useHistory()
    const store = useSelector((store) => store.faculty.faculty.faculty)
    console.log(store)
    const classData = [
        {
            id: 1,
            branch: "Computer Science and Engineering",
            sem: "III",
            year: "2nd",
            courseCode: "CS002",
            sec: "A",
            color: "#FFD460"
        },
        {
            id: 2,
            branch: "Computer Science and Engineering",
            sem: "III",
            year: "2nd",
            courseCode: "CS002",
            sec: "B",
            color: "#1CF5F5"
        },
        {
            id: 3,
            branch: "Computer Science and Engineering",
            sem: "III",
            year: "2nd",
            courseCode: "CS002",
            sec: "B",
            color: "#8218A8"
        },
        {
            id: 4,
            branch: "Computer Science and Engineering",
            sem: "III",
            year: "2nd",
            courseCode: "CS002",
            sec: "B",
            color: "#3CB9EF"
        },
        {
            id: 5,
            branch: "Computer Science and Engineering",
            sem: "III",
            year: "2nd",
            courseCode: "CS002",
            sec: "B",
            color: "#0000008a"
        },
        {
            id: 6,
            branch: "Computer Science and Engineering",
            sem: "III",
            year: "2nd",
            courseCode: "CS002",
            sec: "B",
            color: "#092E43"
        }
    ]
    return (
        <>
            <Navbar bgcolor={'linear-gradient(to bottom right, #001339, #0F3277)'} profile="faculty" display={"none"} />
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
                            designation={store.designation}
                            dob={store.dob}
                            email={store.email}
                            facultyMobileNumber={store.facultyMobileNumber}
                            gender={store.gender}
                            joiningYear={store.joiningYear}
                            editProfile = '/faculty/updateProfile'
                            updatePassword ="/faculty/updatePassword"
                            profile="faculty"
                            display={"none"} 
                            />
                    </div>
                </div>
                <div className="Fclasses">
                    <div className="fac-classes">
                        <p><span style={{ marginRight: "1rem" }}><img src={Arrow} /></span> Classes</p>
                    </div>
                    <div className="Fclasses-cards">
                        {
                            classData.map((item) => {
                                return (
                                    <>
                                       <div className="C-card" key={item.id} style={{marginRight: "2%",marginBottom:"2rem"}}>
                                            <FClassCard 
                                            // item = {item}
                                            color={item.color}
                                            branch={item.branch}
                                            sem= {item.sem}
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

export default FacultyMainPage;