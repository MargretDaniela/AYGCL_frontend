import React from 'react';
import { Link } from 'react-router-dom';
import training1 from './Images/Girl knitting.jpg';
import training2 from './Images/Kniited bags.jpg';
import training3 from './Images/woman farming.jpg';
import training4 from './Images/Liquid soap making.jpg';
import Footer from './Footer';

const Training = () => {
  return (
    <div className="" style={{ marginTop: '150px' }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold text-uppercase" style={{ color: '#992525' }}>Empowerment Trainings</h2>
        <p className="text-muted">Equipping our community with practical skills for self-reliance and growth.</p>
      </div>

      <div className="row g-4">
        {/* Knitting */}
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0">
            <img src={training1} className="card-img-top" alt="Knitting Training" />
            <div className="card-body">
              <h5 className="card-title fw-bold" style={{ color: '#992525' }}>Knitting</h5>
              <p className="card-text">Learn how to create warm garments and accessories while building income-generating skills.</p>
            </div>
          </div>
        </div>

        {/* Crocheting */}
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0">
            <img src={training2} className="card-img-top" alt="Crocheting Training" />
            <div className="card-body">
              <h5 className="card-title fw-bold" style={{ color: '#992525' }}>Crocheting</h5>
              <p className="card-text">Develop artistic patterns and handmade crafts using simple, sustainable techniques.</p>
            </div>
          </div>
        </div>

        {/* Backyard Gardening */}
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0">
            <img src={training3} className="card-img-top" alt="Backyard Gardening Training" />
            <div className="card-body">
              <h5 className="card-title fw-bold" style={{ color: '#992525' }}>Backyard Gardening</h5>
              <p className="card-text">Grow your own food using small spaces — a step toward food security and health.</p>
            </div>
          </div>
        </div>

        {/* Liquid Soap Making */}
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm border-0">
            <img src={training4} className="card-img-top" alt="Soap Making Training" />
            <div className="card-body">
              <h5 className="card-title fw-bold" style={{ color: '#992525' }}>Liquid Soap Making</h5>
              <p className="card-text">Master the process of making affordable liquid soap for home use or starting a small business.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <h5 className="fw-bold">Interested in a training session?</h5>
        <p>Contact us or visit our center to register for upcoming classes.</p>
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

export default Training;
