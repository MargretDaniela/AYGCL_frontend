import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import kids1 from './Images/Kids 1.jpeg';
import kids2 from './Images/First family.jpg';
import kids3 from './Images/Kids playing.jpeg';
import '../Styles/Home.css'
import AboutUs from './AboutUs';
import Services from './Services'
import Impact  from './Impact';
import Footer from './Footer'


const images = [kids1, kids2, kids3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/*Section with Rotating Background Images */}
      <div className="position-relative w-100 vh-100 overflow-hidden mt-5 pt-4">
        <img
          src={images[currentIndex]}
          alt={`background-${currentIndex + 1}`}
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        />

        {/* Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>

        {/*Text */}
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center p-4 z-2">
          <h2>
            SUPPORT <span className="text-danger fw-bold fst-italic">YOUNG LIVES</span>
          </h2>
          <p className="fs-5">
            Empowers youth via mentorship, protection <br />
            skills, health support, advocacy and <br />
            community engagement <br />
            for holistic growth
          </p>
        </div>

        {/* Join Button */}
        <div className="position-absolute bottom-0 end-0 m-4 z-2">
          <Link to="/join" className="btn btn-danger fw-bold shadow">
            JOIN US
          </Link>
        </div>
      </div>
      <AboutUs />
      <Impact/>
      <Services/>
      <Footer/>
    </div>
  );
};

export default Home;
