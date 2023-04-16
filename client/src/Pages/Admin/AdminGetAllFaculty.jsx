import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { adminGetAllFaculty } from '../../redux/action/adminAction'
import AdminHomeHelper from '../../Components/AdminHomeHelper'
import classnames from 'classnames'

import '../../Style/adminAllAddPages.css'

const AdminGetAllFaculty = () => {
    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const [department, setDepartment] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()


    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(adminGetAllFaculty({ department }))
    }

    useEffect(() => {
        if (store.admin.allFaculty.length !== 0) {
            setIsLoading(false)
        }
        
    }, [store.admin.allFaculty.length])

    
    return (
        <div>
            {store.admin.isAuthenticated ? <>
                <AdminHomeHelper />
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-md-4 titlestyle">
                            <form form-inline noValidate onSubmit={formHandler} className='bgf'>
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
                            
                            {store.admin.allFaculty.length !== 0 && <table className="table" style={{marginBottom: "0"}}>
                                <thead className='frameTop'>
                                    <tr>
                                        <th scope="col" style={{borderRadius: "12px 0 0 12px"}}>S.No</th>
                                        <th scope="col">Registration Number</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col" style={{borderRadius: "0 12px 12px 0"}}>Joining Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        store.admin.allFaculty.map((res, index) =>
                                            <tr key={index} className='frameEntry'>
                                                <td scope="row">{index + 1}</td>
                                                <td>{res.registrationNumber}</td>
                                                <td>{res.name}</td>
                                                <td>{res.email}</td>
                                                <td>{res.joiningYear}</td>
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
    )
}

export default AdminGetAllFaculty
