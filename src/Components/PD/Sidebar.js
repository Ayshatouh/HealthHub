// src/components/Sidebar.tsx
import React from 'react';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="/profile-pic.png" alt="Profile" className="profile-pic" />
        <p className="profile-name">John Doe</p>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Dashboard Home</a></li>
          <li><a href="#appointments">Appointments</a></li>
          <li><a href="#records">Medical Records</a></li>
          <li><a href="#messages">Messages</a></li>
          <li><a href="#billing">Billing</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
