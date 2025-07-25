import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import board1 from './Images/team/Peter Obo.jpg';
import board2 from './Images/team/Ivan LLL.jpg';
import board3 from './Images/team/Mine.jpg';
import board4 from './Images/team/NMD Old.jpg';
import team1 from './Images/team/Doreen a.jpg';
import team2 from './Images/team/julie .jpg';
import team3 from './Images/team/Beatrice Aneno.jpg';
import Footer from './Footer';

const Team = () => {
  const renderMemberCard = (member) => (
    <div className="col-md-6 col-lg-3" id='team'>
      <div className="card h-100 shadow rounded-4 border-0 text-center p-3" style={{marginLeft:'30px', marginRight:'10px'}}>
        <img
          src={member.image}
          className="card-img-top rounded-circle mx-auto mt-3"
          alt={member.name}
          style={{ width: '120px', height: '120px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold" style={{ color: '#992525' }}>{member.name}</h5>
          <p className="text-muted mb-1">{member.role}</p>
          <p className="card-text small">{member.description}</p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <a href={member.socials.fb}><FaFacebookF color="#992525" /></a>
            <a href={member.socials.tw}><FaTwitter color="#992525" /></a>
            <a href={member.socials.li}><FaLinkedinIn color="#992525" /></a>
          </div>
        </div>
      </div>
    </div>
  );

  const boardMembers = [
    {
      image: board1,
      name: 'Obbo Peter',
      role: 'Chairperson',
      description: 'Provides strategic guidance and ensures alignment with our mission.',
      socials: { fb: '#', tw: '#', li: '#' },
    },
    {
      image: board2,
      name: 'Ivan Luwaga',
      role: 'Treasurer',
      description: 'Manages financial oversight and supports strategic budgeting.',
      socials: { fb: '#', tw: '#', li: '#' },
    },
    {
      image: board3,
      name: 'Margret Daniela',
      role: 'Board Secretary',
      description: 'Ensures governance and record keeping within the organization.',
      socials: { fb: '#', tw: '#', li: '#' },
    },
    {
      image: board4,
      name: 'Nyaburu Margaret',
      role: 'Board Member',
      description: 'Brings decades of experience in education to guide child-focused strategies and learning programs.',
      socials: { fb: '#', tw: '#', li: '#' },
    },
  ];

  const opsTeam = [
    {
      image: team1,
      name: 'Doreen Aarakit',
      role: 'Programs Manager',
      description: 'Coordinates field programs and monitors community impact.',
      socials: { fb: '#', tw: '#', li: '#' },
    },
    {
      image: team2,
      name: 'Julie Aryenyo',
      role: 'HR and Administration ',
      description: 'Manages logistics and ensures smooth execution of activities.',
      socials: { fb: '#', tw: '#', li: '#' },
    },
    {
      image: team3,
      name: 'Aneno Beatrice',
      role: 'Counselor',
      description: 'Offers emotional support and counseling to youth, children, and caregivers.',
      socials: { fb: '#', tw: '#', li: '#' },
    },
  ];

  return (
    <div className="" style={{ marginTop: '150px' }}>
      {/* Page Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-uppercase" style={{ color: '#992525' }}>Our Leadership Team</h2>
        <p className="text-muted">Meet the passionate individuals guiding our vision and mission.</p>
      </div>

      {/* Board of Directors */}
      <h4 className="text-uppercase fw-bold mb-4" style={{ color: '#992525', marginLeft:'80px' }}>Board of Directors</h4>
      <div className="row g-4 mb-5">
        {boardMembers.map((member, index) => (
          <React.Fragment key={index}>{renderMemberCard(member)}</React.Fragment>
        ))}
      </div>

      {/* Programs and Operations Team */}
      <h4 className="text-uppercase fw-bold mb-4" style={{ color: '#992525', marginLeft:'80px' }}>Programs and Operations Team</h4>
      <div className="row g-4 mb-5">
        {opsTeam.map((member, index) => (
          <React.Fragment key={index}>{renderMemberCard(member)}</React.Fragment>
        ))}
      </div>
      <Footer/>
    </div>
    
  );
};

export default Team;
