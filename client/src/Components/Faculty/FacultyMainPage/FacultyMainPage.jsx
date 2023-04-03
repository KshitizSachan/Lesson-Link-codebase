import React from 'react'
import './FacultyMainPage.css'
import Navbar from '../../Navbar/Navbar'
import Arrow from '../../../Style/Images/Arrow.svg'
import FClassCard from './FClassCard';
import FacultyDetails from './FacultyDetails';
import CopyRight from '../../CopyRight/CopyRight';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const FacultyMainPage = () => {

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
            sem: "Semester  III",
            year: "2nd",
            courseCode: "CS002",
            sec: "B",
            color: "#1CF5F5"
        },
        {
            id: 3,
            branch: "Computer Science and Engineering",
            sem: "Semester  III",
            year: "2nd",
            courseCode: "CS002",
            sec: "B",
            color: "#8218A8"
        },
        {
            id: 4,
            branch: "Computer Science and Engineering",
            sem: "Semester  III",
            year: "2nd",
            courseCode: "CS002",
            sec: "B",
            color: "#3CB9EF"
        },
        {
            id: 5,
            branch: "Computer Science and Engineering",
            sem: "Semester  III",
            year: "2nd",
            courseCode: "CS002",
            sec: "B",
            color: "#0000008a"
        },
        {
            id: 6,
            branch: "Computer Science and Engineering",
            sem: "Semester  III",
            year: "2nd",
            courseCode: "CS002",
            sec: "B",
            color: "#092E43"
        }
    ]
    return (
        <>
            <Navbar bgcolor={'linear-gradient(to bottom right, #001339, #0F3277)'} />
            <div className="FMP-wrapper">
                <div className="fmp-top-background">
                    <div><InsertLinkIcon className="Link-icon" /></div>
                    <div className="faculty-details">
                        <FacultyDetails/>
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
                                            <FClassCard item = {item}/>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <CopyRight/>
        </>
    )
}

export default FacultyMainPage;