// src/components/Dashboard.tsx
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
