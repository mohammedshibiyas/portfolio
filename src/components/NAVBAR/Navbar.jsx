import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div>
        <div className="nav-all">
      <nav id="header">
        <div className="nav-logo">
            <p className="nav-name">Doe</p>
            <span>.</span>
        </div>
        <div className="nav-menu" id="myNavMenu">
            <ul className="nav_menu_list">
                <li className="nav_list">
                    <a href="#home" className="nav-link active-link">Home</a>
                    <div className="circle"></div>
                </li>
                <li className="nav_list">
                    <a href="#about" className="nav-link">About</a>
                    <div className="circle"></div>
                </li>
                <li className="nav_list">
                    <a href="#projects" className="nav-link">Projects</a>
                    <div className="circle"></div>
                </li>
                <li className="nav_list">
                    <a href="#contact" className="nav-link">Contact</a>
                    <div className="circle"></div>
                </li>
            </ul>
        </div>
        <div className="nav-button">
            <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
        </div>
        <div className="nav-menu-btn">
            <i className="uil uil-bars" onclick="myMenuFunction()"></i>
        </div>
      </nav>
      </div>
    </div>
  )
}

export default Navbar
