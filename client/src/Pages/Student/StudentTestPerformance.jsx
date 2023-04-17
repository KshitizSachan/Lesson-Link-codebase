import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMarks } from '../../redux/action/studentAction'
// import HomeHelper from '../../Components/HomeHelper'
import { useHistory } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Arrow from '../../Style/Images/Arrow.svg';
import AttendenceCard from '../../Components/MyChart/AttendenceCard/AttendenceCard';

const StudentTestPerformance = () => {
    const store = useSelector(store => store)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMarks())
    }, [])

    console.log("student", store.student.allMarks.CycleTest1)
    return (
        <>
            <Navbar bgcolor={'linear-gradient(to bottom right, #001339, #0F3277)'} display={"none"} profile="student" />
            {store.student.isAuthenticated ? <>
                <div className="container">
                    {store.student.allMarks.CycleTest1 &&
                        <>
                            {store.student.allMarks.CycleTest1.length !== 0 ? <>
                                <div className="fac-classes" style={{ margin: "0", marginTop: "3rem",backgroundColor:"#0167ce" }}>
                                    <p><span style={{ marginRight: "1rem" }}><img src={Arrow} /></span>Cycle Test 1</p>
                                </div>
                                <div className='AttendenceCards'>
                                    {
                                        store.student.allMarks.CycleTest1.map((res, index) =>
                                            <div key={index}>
                                                <AttendenceCard
                                                    type="performance"
                                                    totalMarks={res.totalMarks}
                                                    obtainedMarks={res.marks}
                                                    subjectCode={res.subject.subjectCode}
                                                    subjectName={res.subject.subjectName}
                                                />
                                            </div>
                                        )}
                                </div>
                            </> : null}
                        </>
                    }
                    {store.student.allMarks.CycleTest2 &&
                        <div className="row mt-3">
                            <div className="col-md-8 m-auto">
                                {store.student.allMarks.CycleTest2.length !== 0 ? <>
                                    <div className="fac-classes" style={{ margin: "0", marginTop: "3rem" }}>
                                    <p><span style={{ marginRight: "1rem" }}><img src={Arrow} /></span>Cycle Test 2</p>
                                </div>
                                <div className='AttendenceCards'>
                                    {
                                        store.student.allMarks.CycleTest1.map((res, index) =>
                                            <div key={index}>
                                                <AttendenceCard
                                                    type="performance"
                                                    totalMarks={res.totalMarks}
                                                    obtainedMarks={res.marks}
                                                    subjectCode={res.subject.subjectCode}
                                                    subjectName={res.subject.subjectName}
                                                />
                                            </div>
                                        )}
                                </div>
                                    </> : null}
                            </div>
                        </div>
                    }

                    {store.student.allMarks.Semester &&
                        <div className="row mt-3">
                            <div className="col-md-8 m-auto">
                                {store.student.allMarks.Semester.length !== 0 ? <>
                                    <h4>Semester</h4>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.No</th>
                                                <th scope="col">Subject Code</th>
                                                <th scope="col">Subject Name</th>
                                                <th scope="col">Obtained Marks</th>
                                                <th scope="col">Total Marks</th>
                                                <th scope="col">Percentage</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                store.student.allMarks.Semester.map((res, index) =>
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{res.subject.subjectCode}</td>
                                                        <td>{res.subject.subjectName}</td>
                                                        <td>{res.marks}</td>
                                                        <td>{res.totalMarks}</td>
                                                        <td>{((res.marks / res.totalMarks) * 100).toFixed(2)}%</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table></> : null}
                            </div>
                        </div>

                    }
                </div></> : (history.push('/'))}

        </>

    )
}

export default StudentTestPerformance
