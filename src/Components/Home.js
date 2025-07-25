import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import kids1 from './Images/Kids 1.jpeg';
import kids2 from './Images/First family.jpg';
import kids3 from './Images/Kids playing.jpeg';
import '../Styles/Home.css';
import AboutUs from './AboutUs';
import Services from './Services';
import Impact from './Impact';
import Footer from './Footer';
import { useScrollAnimation } from './useScrollAnimation';  

const images = [kids1, kids2, kids3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animation hooks for main headline and join button
  const [headlineRef, headlineVisible] = useScrollAnimation();
  const [buttonRef, buttonVisible] = useScrollAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="position-relative w-80 vh-100 overflow-hidden mt-5 pt-4">
        <img
          src={images[currentIndex]}
          alt={`background-${currentIndex + 1}`}
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>

        {/* Headline sliding from left */}
        <div
          ref={headlineRef}
          className={`position-absolute top-50 start-50 translate-middle text-white text-center p-4 z-2 slide-left ${
            headlineVisible ? 'visible' : ''
          }`}
        >
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

        {/* Join Button sliding from right */}
        <div
          ref={buttonRef}
          className={`position-absolute bottom-0 end-0 m-4 z-2 slide-right ${
            buttonVisible ? 'visible' : ''
          }`}
        >
          <Link to="/join" className="btn btn-danger fw-bold shadow">
            JOIN US
          </Link>
        </div>
      </div>

      {/* Other sections slide up from left or right */}
      <SectionWrapper direction="left">
        <AboutUs />
      </SectionWrapper>
      <SectionWrapper direction="right" delay={150}>
        <Impact />
      </SectionWrapper>
      <SectionWrapper direction="left" delay={300}>
        <Services />
      </SectionWrapper>

      <Footer />
    </div>
  );
};

// Helper component to wrap sections with slide animations
const SectionWrapper = ({ direction, delay = 0, children }) => {
  const [ref, visible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${direction === 'left' ? 'slide-left' : 'slide-right'} ${visible ? 'visible' : ''} mt-5`}
    >
      {children}
    </div>
  );
};

export default Home;
