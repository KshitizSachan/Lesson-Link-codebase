import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav style={{backgroundImage:`${props.bgcolor}`}}>
      <div className="logo">
         <div className="LL-logo">
            <img src= 'https://i.ibb.co/cTSZ3CF/Logo.png' alt=""  width="40" height="40" />
         </div>
         <a href="#">Lesson Link</a>
      </div>
      <ul className={isOpen ? "menu active" : "menu"}>
        <></>
        {/* <Link to={}/> */}
        <li><a href="#home">Home</a></li>
        {/* <li><a href="#">About</a></li> */}
        {/* <Link to='/features'></Link> */}
        <li><a href="#feature">Features</a></li>
        <li><a href="#contactUs">Contact</a></li>
        <li><a href="#login">Login</a></li>
        {!props.bgcolor?<><li><a href="#login">Login</a></li></>:<><li><a href="#">Logout</a></li></>}
      </ul>
      <div className="toggle" onClick={toggleMenu}>
        <i className="fa fa-bars" aria-hidden="true">{isOpen?<CloseIcon id='menu-icon-style'/>:<MenuIcon id='menu-icon-style'/>}</i>
      </div>
    </nav>
  );
}

export default Navbar;
