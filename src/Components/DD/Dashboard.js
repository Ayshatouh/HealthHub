import React, { useState } from "react";
import { useNavigate } from "react-router";
import '../DD/Doctor.css';
import Appointment from "./Appointment";
import Upcoming from "./Upcoming";
import ChatRoom from "./Chatroom";
import { BiBookReader, BiChat, BiCalendarEvent, BiTime, BiBook, BiBookOpen } from "react-icons/bi";
import { FaUserCircle } from 'react-icons/fa'; // For Patient Icon
import { MdEdit } from 'react-icons/md';

const Dashboard = () => {
  // State to manage which tab is active
  const [activeTab, setActiveTab] = useState("projects");

  const navigate = useNavigate();

  const updateProfile =()=>{
    
    navigate ('/doctorprofile');
  }

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return (
          <div className="tab-content">
           <Appointment/>
          </div>
        );
      case "services":
        return (
          <div className="tab-content">
            <Upcoming/>
          </div>
        );
      case "chat":
        return (
          <div className="tab-content">
            <ChatRoom/>
          </div>
        );
      case "wallet":
        return (
          <div className="tab-content">
            <h2>Wallet</h2>
            <p>Funds Withdrawn: ₦0.00 | Funds Available: ₦0.00</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">

<div className="header">
      <div className="navbar">
        <FaUserCircle size={40} color="white" />
        <span className="header__title">WELCOME Dr Aysha </span>
      </div>
      <div className="header__right"onClick={updateProfile} >
        <MdEdit size={30} color="white" />
        <span className="header__update">Update Profile</span>
      </div>
    </div>
     
      <div className="tabs">
        <span onClick={() => setActiveTab("projects")}><BiBookReader /><p>Dashboard</p></span>
        <span onClick={() => setActiveTab("services")}><BiCalendarEvent /><p>Upcoming Appointments</p> </span>
        <span onClick={() => setActiveTab("chat")}><BiChat /><p>ChatRoom</p></span>
        <span onClick={() => setActiveTab("wallet")}><BiBook /><p>MyLearningRoom</p></span>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
