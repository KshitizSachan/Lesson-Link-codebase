import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { adminGetAllSubject } from '../../redux/action/adminAction'
import AdminHomeHelper from '../../Components/AdminHomeHelper'
import classnames from 'classnames'

import '../../Style/adminAllAddPages.css'

const AdminGetAllSubjects = () => {
    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const [department, setDepartment] = useState('')
    const [year, setYear] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()


    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(adminGetAllSubject({ department, year }))

    }
    useEffect(() => {
        if (store.admin.allSubject.length !== 0) {
            setIsLoading(false)
        }

    }, [store.admin.allSubject.length])
    return (
        <div>
            <div>
                {store.admin.isAuthenticated ? <>
                    <AdminHomeHelper />
                    <div className="container">
                        <div className="row mt-5 mb-5">
                            <div className="col-md-4 titlestyle">
                                <form noValidate onSubmit={formHandler} className='bgf'>
                                    <div className="form-group">
                                        <label htmlFor="departmentId">Department</label>
                                        <select onChange={(e) => setDepartment(e.target.value)} className={classnames("form-control",
                                            {
                                                'is-invalid': error.department
                                            })} id="departmentId">
                                            <option>Select</option>
                                            <option value="E.C.E">E.C.E</option>
                                            <option value="C.S.E">C.S.E</option>
                                            <option value="D.S.A.I">D.S.A.I</option>
                                            
                                        </select>
                                        {error.department && (<div className="invalid-feedback">{error.department}</div>)}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="yearId">Year</label>
                                        <select onChange={(e) => setYear(e.target.value)} className={classnames("form-control",
                                            {
                                                'is-invalid': error.year
                                            })} id="yearId">
                                            <option>Select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                        {error.year && (<div className="invalid-feedback">{error.year}</div>)}
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="col-md-1">
                                            {
                                                isLoading && <div class="spinner-border text-primary" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    {!isLoading && <button type="submit" className="btn btn-info btn-block addBtn">Search</button>}
                                   
                                </form>


                            </div>
                            <div className="col-md-8 bgf">

                                {store.admin.allSubject.length !== 0 && <table className="table" style={{marginBottom: "0"}}>
                                    <thead className='frameTop'>
                                        <tr>
                                            <th scope="col" style={{borderRadius: "12px 0 0 12px"}}>S.No</th>
                                            <th scope="col">Subject Code</th>
                                            <th scope="col">Subject Name</th>
                                            <th scope="col" style={{borderRadius: "0 12px 12px 0"}}>Total Lectures</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            store.admin.allSubject.map((res, index) =>
                                                <tr key={index} className='frameEntry'>
                                                    <td scope="row">{index + 1}</td>
                                                    <td>{res.subjectCode}</td>
                                                    <td>{res.subjectName}</td>
                                                    <td>{res.totalLectures}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>}

                            </div>
                        </div>
                    </div>
                </> : (history.push('/'))}
            </div>
            
        </div>
    )
}

export default AdminGetAllSubjects
