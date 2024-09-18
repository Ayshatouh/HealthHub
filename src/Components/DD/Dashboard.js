import React, { useState } from "react";
import { useNavigate } from "react-router";
import '../DD/Doctor.css';
import Appointment from "./Appointment";
import Upcoming from "./Upcoming";
import ChatRoom from "./Chatroom";
import { BiBookReader, BiChat } from "react-icons/bi";

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
      <header className="navbar">
        <h1>Dashboard</h1>
        <p className="updateprofile" onClick={updateProfile} >Update Profile</p>
      </header>
      <div className="tabs">
        <span onClick={() => setActiveTab("projects")}><BiBookReader /></span>
        <span onClick={() => setActiveTab("services")}><BiBookReader /> </span>
        <span onClick={() => setActiveTab("chat")}><BiChat /></span>
        <span onClick={() => setActiveTab("wallet")}><BiBookReader /></span>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
