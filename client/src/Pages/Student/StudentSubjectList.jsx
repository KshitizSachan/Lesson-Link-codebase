import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSubjects } from '../../redux/action/studentAction'
// import HomeHelper from '../../Components/HomeHelper'
import { useHistory } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import '../../Style/studentSubjList.css'
const StudentSubjectList = () => {
    const store = useSelector((store) => store)
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllSubjects())
    }, [])
    return (
        <>
            {store.student.isAuthenticated ? <>
                <Navbar bgcolor={'linear-gradient(to bottom right, #001339, #0F3277)'} display={"none"} profile="student" />
                <div className="sabkuch">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 m-auto bgFormat">
                                <table className="table" style={{ width: "max-content", margin: "0.75rem 0rem" }}>
                                    <thead className='headframe'>
                                        <tr>
                                            <th scope="col" style={{ borderRadius: "12px 0px 0px 12px" }}>S.No</th>
                                            <th scope="col">Subject Code</th>
                                            <th scope="col">Subject Name</th>
                                            <th scope="col">Year</th>
                                            <th scope="col" style={{ borderRadius: "0px 12px 12px 0px" }}>Total Lectures</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            store.student.allSubjects.map((res, index) =>
                                                <tr key={index} className='bodyframe'>
                                                    <td><strong>{index + 1}</strong></td>
                                                    <td>{res.subjectCode}</td>
                                                    <td>{res.subjectName}</td>
                                                    <td>{res.year}</td>
                                                    <td>{res.totalLectures}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div></> : (history.push('/'))}
        </>
    )
}

export default StudentSubjectList
