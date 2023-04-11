import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { facultyLogout } from '../../redux/action/facultyAction';
import { studentLogout } from '../../redux/action/studentAction';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory()
  const dispatch = useDispatch()

  const store = useSelector((store) => store)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const logoutHandler = () => {
    if (props.profile === "student") {
      dispatch(studentLogout())
    } else {
      dispatch(facultyLogout())
    }
    history.push('/')
  }

  const displayStyle = {
    display: `${props.display}`
  }

  return (
    <nav style={{ backgroundImage: `${props.bgcolor}` }}>
      {
        (!props.profile)?
        <>
          <div className="logo">
            <div className="LL-logo">
              <img src='https://i.ibb.co/cTSZ3CF/Logo.png' alt="" width="40" height="40" />
            </div>
            <a>Lesson Link</a>
          </div>
        </>:
        <>
        {props.profile === "faculty"?
        <>
         <Link className="logo" to="/faculty" style={{ textDecoration: "none" }}>
            <div className="LL-logo">
              <img src='https://i.ibb.co/cTSZ3CF/Logo.png' alt="" width="40" height="40" />
            </div>
            <a href='#'>Lesson Link</a>
          </Link>
        </>:
        <>
         <Link className="logo" to="/home" style={{ textDecoration: "none" }}>
            <div className="LL-logo">
              <img src='https://i.ibb.co/cTSZ3CF/Logo.png' alt="" width="40" height="40" />
            </div>
            <a href='#'>Lesson Link</a>
          </Link>
        </>}
        </>
      }
      <ul className={isOpen ? "menu active" : "menu"}>
        <li style={displayStyle}><a href="#home">Home</a></li>
        <li style={displayStyle}><a href="#feature">Features</a></li>
        <li style={displayStyle}><a href="#contactUs">Contact</a></li>
        {!props.bgcolor ?
          <><li><a href="#login">Login</a></li></>
          :
          <>
            {props.profile === "faculty" ?
              <>
                <li ><Link to="/attendenceFaculty"><li>MARK ATTENDANCE</li></Link></li>
                <li ><Link to="/faculty/uploadMarks"><li>UPLOAD MARKS</li></Link></li>
              </>
              :<>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ACADEMIC </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/student/testPerformance" style={{color:"#000"}}>Test Performance</Link>
                    <Link className="dropdown-item" to="/student/attendence"  style={{color:"#000"}}>Attendance</Link>
                    <Link className="dropdown-item" to="/student/getAllSubjects"  style={{color:"#000"}}>Student Subject List</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn"><Link to="/studentDetails"><li>STUDENTS</li></Link></button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn"><Link to="/studentDetails"><li>NEW CONVERSATION ({store.student.newerChats.length})</li></Link></button>
                </li>
              </>}
            <li onClick={logoutHandler}><a href="#">LOGOUT</a></li>
          </>
        }
      </ul>
      <div className="toggle" onClick={toggleMenu}>
        <i className="fa fa-bars" aria-hidden="true">{isOpen ? <CloseIcon id='menu-icon-style' /> : <MenuIcon id='menu-icon-style' />}</i>
      </div>
    </nav>
  );
}

export default Navbar;
