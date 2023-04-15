import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";
import { fetchStudents, markAttendence } from "../redux/action/facultyAction";
// import FacultyHomeHelper from '../Components/FacultyHomeHelper'
import { useHistory } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

import "../Style/attendenceFaculty.css";

const AttendenceFaculty = () => {
  const store = useSelector((store) => store);
  const history = useHistory();
  const dispatch = useDispatch();
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [checkedValue, setCheckedValue] = useState([]);
  const [error, setError] = useState({});
  const [flag, setFlag] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const handleInputChange = (e) => {
    const tempCheck = checkedValue;
    let index;
    if (e.target.checked) {
      tempCheck.push(e.target.value);
    } else {
      index = tempCheck.indexOf(e.target.value);
      tempCheck.splice(index, 1);
    }
    setCheckedValue(tempCheck);
  };

  useEffect(() => {
    if (store.error) {
      setError(store.error);
    }
  }, [store.error]);

  const formHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(fetchStudents(department, year, section));
  };

  useEffect(() => {
    if (store.error || !store.faculty.fetchedStudentsHelper) {
      setIsLoading(false);
    }
  }, [store.error, store.faculty.fetchedStudentsHelper]);

  const secondFormHandler = (e) => {
    e.preventDefault();
    setIsLoading2(true);
    dispatch(
      markAttendence(checkedValue, subjectCode, department, year, section)
    );
    setCheckedValue([]);
  };

  useEffect(() => {
    if (store.faculty.fetchedStudentsHelper) {
      setIsLoading2(false);
    }
  }, [store.faculty.fetchedStudentsHelper]);

  return (
    <div>
      {store.faculty.isAuthenticated ? (
        <>
          {/* <FacultyHomeHelper /> */}
          <Navbar bgcolor={'linear-gradient(to bottom right, #001339, #0F3277)'} profile="faculty" display={"none"} />

          {store.faculty.fetchedStudentsHelper && (
            <div className="sabkuch1">
              <div className="row justify-content-center">
                <div className="col-md-4 bg_formatm">
                  <div className="sbtn_h3">
                    <h3 className="markatt">Mark Attendance</h3>
                  </div>
                  <form noValidate onSubmit={formHandler}>
                    <div className="form-group">
                      <label htmlFor="branchId" className="datafontstyle">Department</label>
                      <select
                        onChange={(e) => setDepartment(e.target.value)}
                        className={classnames("form-control", {
                          "is-invalid": error.department,
                        })}
                        id="branchId"
                      >
                        <option>Select</option>
                        <option value={store.faculty.faculty.faculty.department}>
                          {store.faculty.faculty.faculty.department}
                        </option>
                      </select>
                      {error.department && (
                        <div classNameName="invalid-feedback">
                          {error.department}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="yearId" className="datafontstyle">Year</label>
                      <select
                        onChange={(e) => setYear(e.target.value)}
                        className={classnames("form-control", {
                          "is-invalid": error.year,
                        })}
                        id="yearId"
                      >
                        <option>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>

                      {error.year && (
                        <div classNameName="invalid-feedback">{error.year}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="sectionId" className="datafontstyle">Section</label>
                      <select
                        onChange={(e) => setSection(e.target.value)}
                        className={classnames("form-control", {
                          "is-invalid": error.section,
                        })}
                        id="sectionId"
                      >
                        <option>Select</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                      </select>
                      {error.section && (
                        <div classNameName="invalid-feedback">
                          {error.section}
                        </div>
                      )}
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-md-1">
                        {isLoading && (
                          <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {!isLoading && (
                      <div className="sbtn">
                        <button type="submit" className="submitBtn">
                          Search
                        </button>
                      </div>

                    )}
                  </form>
                </div>
              </div>
            </div>
          )}

          {!store.faculty.fetchedStudentsHelper && (
            <div className="col  justify-content-center mt-4 disalign">
              <div className="infoheader">
                <h4>Computer Science & Engineering</h4>
                <div className="batchinfo">
                  <h6>Semester III</h6>
                  <h6>Year - 2</h6>
                  <h6>Section - B</h6>
                </div>
              </div>
              <div className="col-md-4 bg_formatm">
                <form onSubmit={secondFormHandler}>
                  <div className="form-group">
                    <label htmlFor="subjectId" className="datafontstyle">Subject Code</label>
                    <select
                      required
                      onChange={(e) => setSubjectCode(e.target.value)}
                      className="form-control"
                      id="subjectId"
                    >
                      <option>Select</option>
                      {store.faculty.allSubjectCodeList.map(
                        (subjectCodeName) => (
                          <option>{subjectCodeName}</option>
                        )
                      )}
                    </select>
                  </div>
                  <table className="table table_widthm">
                    <thead className="frame1">
                      <tr>
                        <td style={{ borderRadius: "12px 0px 0px 12px" }}>
                          <div>
                          </div>
                        </td>
                        <th scope="col" className="fontStyle">
                          Registration Number
                        </th>
                        <th
                          scope="col"
                          className="fontStyle"
                          style={{ borderRadius: "0px 12px 12px 0px" }}
                        >
                          Student Name
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {store.faculty.fetchedStudents.map((obj, index) => (
                        <tr className="frame2">
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={obj._id}
                                onChange={handleInputChange}
                                id="defaultCheck1"
                              />
                            </div>
                          </td>
                          <td className="datafontstyle" key={index}>
                            {obj.registrationNumber}
                          </td>
                          <td className="datafont2">{obj.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div class="row justify-content-center">
                    <div class="col-md-1">
                      {isLoading2 && (
                        <div class="spinner-border text-primary" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="sbtn">
                    {!isLoading2 && (
                      <button type="submit" className="submitBtn">
                        Submit
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      ) : (
        history.push("/")
      )}
    </div>
  );
};

export default AttendenceFaculty;
