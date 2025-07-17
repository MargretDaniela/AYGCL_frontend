import React from 'react';
import { useLocation } from 'react-router-dom';
import knitting from './Images/Girl knitting.jpg';
import farming from './Images/Farming.jpg';
import liquid from './Images/Liquid soap making.jpg';
import '../Styles/Services.css'
const Services = () => {
  const { hash } = useLocation();
  const isServicesView = hash === '#services';

  return (
    <div className={`py-5 text-center ${isServicesView ? 'services-top-margin' : ''}`} id="services">
      <h2 className="mb-5 fw-bold text-uppercase">Our Services</h2>

      <div className="row justify-content-center px-5  g-4">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <img src={knitting} className="card-img-top" alt="Knitting and crocheting" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Knitting and crocheting</h5>
              <p className="card-text">
                We introduce young people to the rewarding craft of knitting, helping them create with both hands and heart.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <img src={farming} className="card-img-top" alt="Horticulture and Olericulture" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Horticulture and Olericulture</h5>
              <p className="card-text">
                The young people learn how to grow fruits, herbs, and vegetables, fostering healthy living.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <img src={liquid} className="card-img-top" alt="Liquid soap making" />
            <div className="card-body">
              <h5 className="card-title fw-bold">Liquid soap making</h5>
              <p className="card-text">
                Young lives gain a skill of manufacturing liquid soap that nurtures their focus and pride in work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="mt-5">
        <a href="/programs" className="btn btn-danger btn-lg">View All Programs</a>
      </div>
    </div>
  );
};

export default Services;
