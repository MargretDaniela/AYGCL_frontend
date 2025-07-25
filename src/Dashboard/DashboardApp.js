// src/Dashboard/DashboardApp.js
import React, { useLayoutEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CreateAdmin from './pages/CreateAdmin';
import ManageAdmins from './pages/ManageAdmins';

const DashboardHome = () => (
  <div>
    <h2>Welcome to the Dashboard</h2>
    <p>Select a menu item from the sidebar.</p>
  </div>
);

const DashboardApp = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || (user.user_type !== 'admin' && user.user_type !== 'super_admin')) {
      navigate('/admin-login');
    }
  }, [navigate]);

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="createadmin" element={<CreateAdmin />} />
          <Route path="manageadmins" element={<ManageAdmins />} />
          {/* Add other dashboard pages below */}
          {/* <Route path="volunteers" element={<Volunteers />} /> */}
          {/* <Route path="programs" element={<Programs />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default DashboardApp;
