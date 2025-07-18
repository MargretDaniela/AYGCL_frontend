import React from 'react';
import '../Styles/Mission.css'; 
import missionImg1 from './Images/youth joint.jpg'; 
import missionImg2 from './Images/ChildProtection.jpg';    
import Footer from './Footer';

const Mission = () => {
  return (
    <div className="mission-page" style={{ marginTop: '120px' }} id='mission'>
      <div className="container py-5">
        {/* Mission Intro */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase" style={{ color: '#992525' }}>Our Mission</h2>
          <p className="lead mt-3">
            Empowering communities through child-centred approaches to foster children’s survival,
            growth, and transformative development — prioritizing their needs at every stage.
          </p>
        </div>

        {/*Community Empowerment */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src={missionImg1} className="img-fluid rounded shadow" alt="Community Involvement"
            style={{height:'300px', width:'470px'}} />
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold mb-3">Community-Led Growth</h4>
            <p>
              This mission actively involves communities in children’s growth and development — 
              empowering families to take ownership of child welfare. Through grassroots outreach, 
              we strengthen community bonds and ensure that every child thrives in a nurturing, informed environment.
            </p>
          </div>
        </div>

        {/*Holistic Child Support */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6">
            <img src={missionImg2} className="img-fluid rounded shadow" alt="Child Support Services" />
          </div>
          <div className="col-md-6">
            <h4 className="fw-bold mb-3">Holistic Child Well-being</h4>
            <p>
              We implement early childhood education, child-led research, and inclusive practices. 
              Our mission offers psychological services, and nurtures emotional and mental well-being — 
              building confident, resilient, emotionally healthy individuals prepared to transform their communities.
            </p>
          </div>
        </div>

        <div className="text-center bg-light rounded p-5 shadow-sm" style={{ borderLeft: '8px solid #992525' }}>
          <h5 className="fw-bold mb-3">Join us in building a future where every child thrives.</h5>
          <p className="mb-4">Together, we can empower families, uplift communities, and transform generations.</p>
          <a href="/join" className="btn btn-outline-danger px-4 py-2">Get Involved</a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mission;
