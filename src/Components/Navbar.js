import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './Images/AYGCL Logo.jpg';
import '../Styles/Navbar.css';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/*Logo + Home Button + Donate */}
      <div className="header-bar d-flex justify-content-between align-items-center px-4">
        {/* Left side: Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" height="60" />
        </Link>

        {/*Home button */}
        <div className="mx-auto">
          <Link to="/" className="btn btn-outline-danger btn-sm back-home-btn" style={{
            
          }}>
             Back to home
          </Link>
        </div>

        {/*Donate button */}
        <Link to="/donate" className="donate-btn">
          DONATE <span className="rotating-heart">🤍</span>
        </Link>
      </div>

      {/* Navigation Section */}
      <Navbar
        expand="lg"
        expanded={expanded}
        className="nav-links-bar"
        collapseOnSelect
        style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          zIndex: 1040,
        }}
      >
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(!expanded)}
            className="ms-auto border-0"
          />
          <Navbar.Collapse id="responsive-navbar-nav" className="navhead">
            <Nav className="main-nav flex-column flex-lg-row w-100 justify-content-center">
              {/*Who we are */}
              <div className="nav-item-with-dropdown">
                <span className="nav-link">Who we are</span>
                <div className="custom-dropdown">
                  <Link to="/about#story" className="dropdown-item">Our Story</Link>
                  <Link to="/team#team" className="dropdown-item">Our Team</Link>
                  <Link to="/mission#mission" className="dropdown-item">Our Mission</Link>
                </div>
              </div>

              {/* Other dropdowns */}
              <div className="nav-item-with-dropdown">
                <span className="nav-link">What we offer</span>
                <div className="custom-dropdown">
                  <Link to="/services#services" className="dropdown-item">Services</Link>
                  <Link to="/workshops#workshops" className="dropdown-item">Workshops</Link>
                  <Link to="/training#training" className="dropdown-item">Training</Link>
                </div>
              </div>

              <div className="nav-item-with-dropdown">
                <span className="nav-link">Latest</span>
                <div className="custom-dropdown">
                  <Link to="/impact#impact" className="dropdown-item">Impact</Link>
                  <Link to="/events#events" className="dropdown-item">Events</Link>
                  <Link to="/blog#blog" className="dropdown-item">Blog</Link>
                </div>
              </div>

              <div className="nav-item-with-dropdown">
                <span className="nav-link">Connect with us</span>
                <div className="custom-dropdown">
                  <Link to="/join" className="dropdown-item">Contact</Link>
                  <Link to="/donate#donate" className="dropdown-item">Donate</Link>
                  <Link to="/" className="dropdown-item">Visit</Link>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
