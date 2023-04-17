import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAttendence } from '../redux/action/studentAction'

// import HomeHelper from '../Components/HomeHelper'
import { useHistory } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Arrow from '../Style/Images/Arrow.svg'
import AttendenceCard from '../Components/MyChart/AttendenceCard/AttendenceCard';

const Home = () => {
    const store = useSelector(store => store)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAttendence())
    }, [])

    return (
        <>
            <Navbar bgcolor={'linear-gradient(to bottom right, #001339, #0F3277)'} display={"none"} profile="student" />
            <div className="attendence-wrapper" style={{ width: "100%", minHeight: "82vh", padding: "0rem 3rem" }}>
                {store.student.isAuthenticated ? <>
                    <div className="fac-classes" style={{ margin: "0", marginTop: "3rem",backgroundColor:"#0167ce" }}>
                        <p><span style={{ marginRight: "1rem" }}><img src={Arrow} /></span>Attendence</p>
                    </div>
                    <div className='AttendenceCards'>
                        {
                            store.student.attendence.map((res, index) =>
                                <div key={index}>
                                    <AttendenceCard
                                        type = "attendence"
                                        maxHours={res.maxHours}
                                        presentHours={res.totalLecturesByFaculty}
                                        absentHours={res.lectureAttended}
                                        subjectCode={res.subjectCode}
                                        subjectName={res.subjectName}
                                    // attendPer={res.attendence}
                                    />
                                </div>
                            )
                        }

                    </div>
                </> : (history.push('/'))
                }
            </div>
        </>

    )
}

export default Home;
{/* <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6 m-auto">
                            <table className="table border">
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Subject Code</th>
                                        <th scope="col">Subject Name</th>
                                        <th scope="col">Maximum Hours</th>
                                        <th scope="col">Present Hours</th>
                                        <th scope="col">Absent Hours</th>
                                        <th scope="col">Total Hours</th>
                                        <th scope="col">Attendence</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        store.student.attendence.map((res, index) =>
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{res.subjectCode}</td>
                                                <td>{res.subjectName}</td>
                                                <td>{res.maxHours}</td>
                                                <td>{res.lectureAttended}</td>
                                                <td>{res.absentHours}</td>
                                                <td>{res.totalLecturesByFaculty}</td>
                                                <td>{res.attendence}%</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> */}
