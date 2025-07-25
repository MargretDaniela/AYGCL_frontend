import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Users,
  CalendarDays,
  BookOpen,
  UserCog,
  HeartPulse,
  HandCoins,
  FilePlus2,
  MessageCircleHeart,
  UserPlus 
} from 'lucide-react';

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const userType = user?.user_type;

  return (
    <div
      className="bg-danger-subtle text-dark p-3 vh-100"
      style={{ width: '250px', backgroundColor: '#f8d7da' }}
    >
      <h4 className="text-center mb-4 fw-bold text-danger">
        Admin Dashboard
      </h4>
      <nav className="nav flex-column">
        <NavLink
          to="/secure"
          className="nav-link text-dark mb-2 d-flex align-items-center"
        >
          <Home className="me-2" size={18} />
          Overview
        </NavLink>

        {/* Only Super Admin sees Admin Management */}
        {userType === 'super_admin' && (
          <>
            <NavLink
              to="/secure/createadmin"
              className="nav-link text-dark mb-2 d-flex align-items-center"
            >
              <UserPlus className="me-2" size={18} />
              Create Admin
            </NavLink>

            <NavLink
              to="/secure/manageadmins"
              className="nav-link text-dark mb-2 d-flex align-items-center"
            >
              <UserCog className="me-2" size={18} />
              Manage Admins
            </NavLink>
          </>
        )}

        {/* Both Super Admin and Baby Admin see the rest */}
        {['super_admin', 'admin'].includes(userType) && (
          <>
            <NavLink
              to="/dashboard/programs"
              className="nav-link text-dark mb-2 d-flex align-items-center"
            >
              <BookOpen className="me-2" size={18} />
              Programs
            </NavLink>

            <NavLink
              to="/dashboard/volunteers"
              className="nav-link text-dark mb-2 d-flex align-items-center"
            >
              <Users className="me-2" size={18} />
              Volunteers
            </NavLink>

            <NavLink
              to="/dashboard/events"
              className="nav-link text-dark mb-2 d-flex align-items-center"
            >
              <CalendarDays className="me-2" size={18} />
              Events
            </NavLink>

            <NavLink
              to="/dashboard/beneficiaries"
              className="nav-link text-dark mb-2 d-flex align-items-center"
            >
              <HeartPulse className="me-2" size={18} />
              Beneficiaries
            </NavLink>

            <NavLink
              to="/dashboard/enrollments"
              className="nav-link text-dark mb-2 d-flex align-items-center"
            >
              <FilePlus2 className="me-2" size={18} />
              Enrollments
            </NavLink>

            <NavLink
              to="/dashboard/donations"
              className="nav-link text-dark mb-2 d-flex align-items-center"
            >
              <HandCoins className="me-2" size={18} />
              Donations
            </NavLink>

            <NavLink
              to="/dashboard/feedback"
              className="nav-link text-dark mb-2 d-flex align-items-center"
            >
              <MessageCircleHeart className="me-2" size={18} />
              Feedback
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
