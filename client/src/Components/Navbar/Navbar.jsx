import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { facultyLogout } from '../../redux/action/facultyAction';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory()
  const dispatch = useDispatch()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const logoutHandler = () => {
    dispatch(facultyLogout())
    history.push('/')
  }

  const displayStyle = {
    display: `${props.display}`
  }

  console.log("Link",props.store)
  return (
    <nav style={{ backgroundImage: `${props.bgcolor}` }}>
      {
        (props.display) ? <>
          <Link className="logo" to="/faculty" style={{ textDecoration: "none" }}>
            <div className="LL-logo">
              <img src='https://i.ibb.co/cTSZ3CF/Logo.png' alt="" width="40" height="40" />
            </div>
            <a href='#'>Lesson Link</a>
          </Link>
        </> : <>
          <div className="logo">
            <div className="LL-logo">
              <img src='https://i.ibb.co/cTSZ3CF/Logo.png' alt="" width="40" height="40" />
            </div>
            <a>Lesson Link</a>
          </div>
        </>
      }
      <ul className={isOpen ? "menu active" : "menu"}>
        <></>
        {/* <Link to={}/> */}

        <li style={displayStyle}><a href="#home">Home</a></li>
        <li style={displayStyle}><a href="#feature">Features</a></li>
        <li style={displayStyle}><a href="#contactUs">Contact</a></li>
        {!props.bgcolor ? 
        <><li><a href="#login">Login</a></li></> 
        :
         <>
           <li ><Link to="/attendenceFaculty"><li>MARK ATTENDANCE</li></Link></li>
           <li ><Link to="/faculty/uploadMarks"><li>UPLOAD MARKS</li></Link></li>
           <li onClick={logoutHandler}><a href="#">LOGOUT</a></li>
        </>}
      </ul>
      <div className="toggle" onClick={toggleMenu}>
        <i className="fa fa-bars" aria-hidden="true">{isOpen ? <CloseIcon id='menu-icon-style' /> : <MenuIcon id='menu-icon-style' />}</i>
      </div>
    </nav>
  );
}

export default Navbar;
