import React from 'react';
import logo from './Images/AYGCL Logo.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: 'rgba(128, 0, 0, 0.66)',
        color: 'white',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
                <Container>
                    {/* Top Section */}
            <Row className="align-items-start text-center text-md-start">
            {/* Logo */}
            <Col md={3} sm={12} className="mb-4 mb-md-0 d-flex justify-content-md-start justify-content-center">
                <img
                src={logo}
                alt="Asili Yamama Logo"
                style={{ maxWidth: '120px', height: 'auto', marginLeft: '-20px', borderRadius:'20px' }} // <-- adjust margin as needed
                />
            </Col>

            {/* Description + Connect */}
            <Col md={6} sm={12} className="d-flex flex-column align-items-center text-center">
                <p style={{ fontSize: '1rem', lineHeight: '1.4', maxWidth: '500px' }}>
                Asili Yamama Generation empowers children, youth, and caregivers through mentorship,
                psychological support, and climate advocacy while equipping communities with the tools <br /> 
                and care they need to thrive.
                </p>

                <div className="d-flex align-items-center justify-content-center gap-5 mt-2">
                <h5 className="mb-0">Connect</h5>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white fs-4">
                    <Facebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white fs-4">
                    <Instagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white fs-4">
                    <Twitter />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white fs-4">
                    <Youtube />
                </a>
                </div>
            </Col>

            {/* Spacer for symmetry */}
            <Col md={3} sm={12}></Col>
            </Row>


        {/* Separator Line */}
         <hr style={{ borderColor: '#fff', margin: 0, width: '100vw', position: 'relative', left: '49.3%',  marginLeft: '-50vw', marginRight: '-50vw' }} />


        {/* Bottom Links */}
        <Row className="text-white text-center text-md-start">
          {/* Outreach */}
          <Col md={4} sm={12} className="mb-4 mb-md-0">
            <h5><a href="#outreach" className="text-white text-decoration-none">OutReach</a></h5>
            <p className="mb-1">Address: Mutungo Kampala, Uganda</p>
            <p className="mb-1">Phone: +256 782 446 763</p>
            <p className="mb-1">
              Email:{' '}
              <a href="mailto:asiliyamamageneration@gmail.com" className="text-white text-decoration-none">
                asiliyamamageneration@gmail.com
              </a>
            </p>
          </Col>

          {/* Get Involved */}
          <Col md={4} sm={12} className="mb-4 mb-md-0 text-center">
            <h5>
              <a href="#get-involved-form" className="text-white text-decoration-none">Get Involved</a>
            </h5>
            <a href="#donor-form" className="d-block mb-1 text-white text-decoration-none">Become a Donor</a>
            <a href="#volunteer-form" className="d-block mb-1 text-white text-decoration-none">Become a Volunteer</a>
            <a href="#membership-section" className="d-block mb-1 text-white text-decoration-none">Gain Membership</a>
          </Col>

          {/* Committee */}
          <Col md={4} sm={12} className="text-md-end text-center">
            <h5><a href="#committee" className="text-white text-decoration-none">Committee</a></h5>
            <a href="#board" className="d-block mb-1 text-white text-decoration-none">The Board of Directors</a>
            <a href="#volunteers" className="d-block mb-1 text-white text-decoration-none">Volunteers</a>
            <a href="#partners" className="d-block mb-1 text-white text-decoration-none">Partners</a>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="pt-3">
          <Col className="text-center" style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            &copy; {new Date().getFullYear()} Asili Yamama Generation. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
