import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { fontSize } from '@mui/system';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <div className="logo">
         <div className="LL-logo">
            <img src= 'https://i.ibb.co/cTSZ3CF/Logo.png' alt=""  width="40" height="40" />
         </div>
         <a href="#">Lesson Link</a>
      </div>
      <ul className={isOpen ? "menu active" : "menu"}>
        <></>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="toggle" onClick={toggleMenu}>
        <i className="fa fa-bars" aria-hidden="true">{isOpen?<CloseIcon id='menu-icon-style'/>:<MenuIcon id='menu-icon-style'/>}</i>
      </div>
    </nav>
  );
}

export default Navbar;
