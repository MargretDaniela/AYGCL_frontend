import React from 'react';
import { Link } from 'react-router-dom';
import workshop1 from './Images/Gathered youth.jpg';
import workshop2 from './Images/Gal on mic.jpg';
import workshop3 from './Images/youth joint.jpg';
import workshop4 from './Images/LifeSkills.jpg';
import Footer from './Footer';

const Workshops = () => {
  return (
    <div className="" style={{ marginTop: '150px' }} id='workshops'>
      <div className="text-center mb-5">
        <h2 className="fw-bold text-uppercase" style={{ color: '#992525' }}>Community Workshops</h2>
        <p className="text-muted">Interactive sessions that inspire, educate, and empower our communities.</p>
      </div>

      <div className="row g-4">
        {/* Workshop 1 */}
        <div className="col-md-6 col-lg-3" style={{marginLeft:'150px'}}>
          <div className="card h-100 shadow-sm border-0">
            <img src={workshop1} className="card-img-top" alt="Mentorship Workshop" />
            <div className="card-body">
              <h5 className="card-title fw-bold" style={{ color: '#992525' }}>Mentorship Workshop</h5>
              <p className="card-text">Guiding adolescents and youth through one-on-one and group mentorship programs.</p>
            </div>
          </div>
        </div>

        {/* Workshop 2 */}
        <div className="col-md-6 col-lg-3" style={{marginLeft:'50px'}}>
          <div className="card h-100 shadow-sm border-0">
            <img src={workshop2} className="card-img-top" alt="Youth Dialogue" />
            <div className="card-body">
              <h5 className="card-title fw-bold" style={{ color: '#992525' }}>Youth Dialogue</h5>
              <p className="card-text">Open forums for youth to express, share experiences, and co-create solutions.</p>
            </div>
          </div>
        </div>

        {/* Workshop 3 */}
        <div className="col-md-6 col-lg-3" style={{marginLeft:'50px'}}>
          <div className="card h-100 shadow-sm border-0">
            <img src={workshop3} className="card-img-top" alt="Parenting Skills Training" />
            <div className="card-body">
              <h5 className="card-title fw-bold" style={{ color: '#992525' }}>Parenting Skills</h5>
              <p className="card-text">Training sessions for caregivers on nurturing, protecting, and supporting children.</p>
            </div>
          </div>
        </div>

        {/* Workshop 4 */}
        <div className="col-md-6 col-lg-3" style={{marginLeft:'500px', marginTop:'70px'}}>
          <div className="card h-100 shadow-sm border-0">
            <img src={workshop4} className="card-img-top" alt="Empowerment Seminar" />
            <div className="card-body">
              <h5 className="card-title fw-bold" style={{ color: '#992525' }}>Empowerment Seminar</h5>
              <p className="card-text">Equipping communities with knowledge on rights, resilience, and self-sufficiency.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-5">
        <h5 className="fw-bold">Want to participate or collaborate?</h5>
        <p>We welcome partners, volunteers, and participants for our upcoming workshops.</p>
        <Link
          to="/join"
          className="btn btn-outline-danger px-4 py-2"
          style={{ borderColor: '#992525', color: '#992525' }}
        >
          Get in Touch
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Workshops;
