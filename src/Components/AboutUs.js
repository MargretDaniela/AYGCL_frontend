import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Styles/AboutUs.css';

const AboutUs = () => {
  const { hash } = useLocation();
  const isStoryView = hash === '#story';

  return (
    <div className={`text-center ${isStoryView ? 'story-top-margin' : 'no-top-margin'}`}>
      <h2
        className="bg-danger bg-opacity-25 py-4 fw-bold section-title"
        id="story"
        style={{ fontSize: '2.5rem' }}
      >
        OUR STORY
      </h2>

      <div className="bg-white p-4 mx-auto rounded shadow-sm" style={{ maxWidth: '900px' }}>
        <p>
          We nurture children and empower the youth through care, skills, <br />
          health support, advocacy and inclusive, community-led programs <br />
          and foster lasting change and local collaboration.
        </p>
      </div>

      {/* VISION - MISSION - GOALS Section */}
      <div className="vision-mission-goals d-flex justify-content-center flex-wrap mb-5" style={{gap:'8rem'}}>
        {/* Vision */}
        <div className="border border-danger rounded-5 p-4 shadow hover-box d-flex flex-column justify-content-between" style={{ width: '240px', height: '270px' }}>
          <div>
            <h4 className="fw-bold">VISION</h4>
            <p className="mb-3">
              Empowering young generations and caregivers <br />
              to lead self-sustaining, impactful, resilient, healthy <br />
              and purpose-driven lives thats create an impact by having dreamers.
            </p>
          </div>
          <a href="/"  className="btn btn-danger mt-auto"
          style={{ fontSize: '0.75rem', marginLeft:'40px', marginRight:'40px'}}>READ MORE</a>
        </div>
        {/* Mission */}
        <div className="border border-danger rounded-5 p-4 shadow hover-box d-flex flex-column justify-content-between" style={{ width: '240px', height: '270px' }}>
          <div>
            <h4 className="fw-bold">MISSION</h4>
            <p className="mb-3">
              Engage communities through child-centered approaches <br />
              to support child's survival, growth and transformative development br
              that can create a bright future.
            </p>
          </div>
           <a href="/"  className="btn btn-danger mt-auto"
          style={{ fontSize: '0.75rem', marginLeft:'40px', marginRight:'40px'}}>READ MORE</a>
        </div>

        {/* Goals */}
        <div className="border border-danger rounded-5 p-2 shadow hover-box d-flex flex-column justify-content-between" style={{ width: '240px', height: '270px' }}>
          <div>
            <h4 className="fw-bold">GOALS</h4>
            <ul className="text-start ps-3 mb-3">
              <li>Empower young lives to thrive.</li>
              <li>Support children and youth survival.</li>
              <li>Promote sustainable youth and child development.</li>
              <li>Engage youth with hands on skills.</li>
            </ul>
          </div>
            <a href="/"  className="btn btn-danger mt-auto pt-1.5"
          style={{ fontSize: '0.75rem', marginLeft:'58px', marginRight:'58px'}}>READ MORE</a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
