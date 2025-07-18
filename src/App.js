import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import CustomNavbar from './Components/Navbar';
import AboutUs from './Components/AboutUs'; 
import Impact from './Components/Impact'
import Services from './Components/Services'
import Programs from './Components/Programs'
import Donate from './Components/Donate';
import Blog from './Components/Blog';
import Events from './Components/Events';
import Training from './Components/Training';
import Workshops from './Components/Workshops';
import Team from './Components/Team';
import Mission from './Components/Mission';
import Vision from './Components/Vision';
import Goals from './Components/Goals';

function App() {
  return (
    <Router>
      <CustomNavbar /> {/* Navbar appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/impact" element={<Impact />} /> {/* optional route */}
        <Route path="/services" element={<Services />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events" element={<Events />} />
        <Route path="/training" element={<Training/>} />
        <Route path="/workshops" element={<Workshops/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/mission" element={<Mission/>} />
        <Route path="/vision" element={<Vision/>} />
         <Route path="goals" element={<Goals/>} />
      </Routes>
    </Router>
  );
}

export default App;
