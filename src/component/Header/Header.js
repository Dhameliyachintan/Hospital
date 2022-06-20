import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div className="main-header">
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
            <i className="bi bi-phone" /> +91 9988776655
          </div>
          <div className="d-none d-lg-flex social-links align-items-center">
            <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
            <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
            <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
          </div>
        </div>
      </div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <div className="logo">
            <a href="index.html">
              {/* <h1 className="logo me-auto">City</h1><br />
              <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2> */}
              <NavLink exact to={"/"} className="logo me-auto">City</NavLink><br />
              <NavLink exact to={"/"} className="logo-tiny-text me-auto">Multispeciality Hospital</NavLink>
            </a>
          </div>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                {/* <a className="nav-link scrollto active" href="index.html">Home</a> */}
                <NavLink exact to={"/"} ClassName="nav-link scrollto active">Home</NavLink>
              </li>
              <li>
                {/* <a className="nav-link scrollto" href="./pages/departments.html">Departments</a> */}
                <NavLink exact to={"/Departments"} ClassName="nav-link scrollto">Departments</NavLink>
              </li>
              <li>
                {/* <a className="nav-link scrollto" href="./pages/About.html">Departments</a> */}
                <NavLink exact to={"/About"} ClassName="nav-link scrollto">About</NavLink>
              </li>
              <li>
                {/* <a className="nav-link scrollto" href="./pages/doctors.html">Doctors</a> */}
                <NavLink exact to={"/Doctors"} ClassName="nav-link scrollto">Doctors</NavLink>
              </li>
              <li>
                {/* <a className="nav-link scrollto " href="./pages/about.html">About</a> */}
                <NavLink exact to={"/Medicine"} ClassName="nav-link scrollto">Medicine</NavLink>
              </li>
              <li>
                {/* <a className="nav-link scrollto" href="./pages/contact.html">Contact</a> */}
                <NavLink exact to={"/contact"} ClassName="nav-link scrollto">contact</NavLink>
              </li>
              <li>
                {/* <a className="nav-link scrollto" href="./pages/contact.html">Contact</a> */}
                <NavLink exact to={"/Doctor"} ClassName="nav-link scrollto">Doctor</NavLink>
              </li>
              <li>
                {/* <a className="nav-link scrollto" href="./pages/contact.html">Login</a> */}
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          <NavLink to={"/Bookappointment"} className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
            Bookappointment</NavLink>
          <NavLink to="/Login" className="appointment-btn scrollto">
            <span className="d-none d-md-inline">Login/ Signup</span>
          </NavLink>
        </div>
      </header>
    </div>

  );
}

export default Header;