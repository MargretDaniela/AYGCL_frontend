// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// General site pages
import AboutUs from './Components/AboutUs';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import CustomNavbar from './Components/Navbar';
import Donate from './Components/Donate';
import Events from './Components/Events';
import Goals from './Components/Goals';
import Home from './Components/Home';
import Impact from './Components/Impact';
import Mission from './Components/Mission';
import Programs from './Components/Programs';
import Services from './Components/Services';
import Workshops from './Components/Workshops';
import Team from './Components/Team';
import Training from './Components/Training';
import Vision from './Components/Vision';
import VolunteerForm from './Components/VolunteerForm';

// Dashboard & Auth
import AdminLogin from './Dashboard/components/AdminLogin';
import DashboardApp from './Dashboard/DashboardApp';

const AppWrapper = () => {
  const location = useLocation();

  // Hide navbar on all secure routes and login
  const hideNavbar =
    location.pathname.startsWith('/secure') || location.pathname === '/admin-login';

  return (
    <>
      {!hideNavbar && <CustomNavbar />}
      <Routes>
        {/* Public site routes */}
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events" element={<Events />} />
        <Route path="/training" element={<Training />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/team" element={<Team />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/volunteerForm" element={<VolunteerForm />} />

        {/* Admin login and dashboard */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/secure/*" element={<DashboardApp />} /> {/* Secure dashboard with nested routes */}
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
