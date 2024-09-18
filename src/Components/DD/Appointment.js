import React, {useState} from "react";
import '../DD/Appt.css';
import { useNavigate } from "react-router";
import { Card } from "reactstrap";
import Upcoming from "./Upcoming";


const Appointment = () => {
    const navigate = useNavigate();
    const viewUpcoming =()=>{
        navigate('/upcoming');
    } 
    
   


  return (
    <div className="dashboard-container">
      <Card >
        <div className="card-content">
          <div className="icon">✔️</div>
          <h3>0</h3>
          <p>Appointments Request</p>
          <button className="view-btn" onClick={viewUpcoming}>View</button>
        </div>
      </Card>

      <Card>
        <div className="card-content">
          <div className="icon">🕒</div>
          <h3>0</h3>
          <p>Patient Information</p>
          <button className="view-btn">View</button>
        </div>
      </Card>

      <Card>
        <div className="card-content">
          <div className="icon">❌</div>
          <h3>0</h3>
          <p>Clinial Notes</p>
          <button className="view-btn">View</button>
        </div>
      </Card>

      {/* <Card>
        <div className="card-content">
          <div className="icon">🎁</div>
          <h3>0</h3>
          <p>New Messages</p>
          <button className="view-btn">View</button>
        </div>
      </Card> */}

      {/* <Card>
        <div className="card-content">
          <div className="icon">⏳</div>
          <h3>0</h3>
          <p> Complaint</p>
          <button className="view-btn">View</button>
        </div>
      </Card>

      <Card>
        <div className="card-content">
          <div className="icon">❌</div>
          <h3>0</h3>
          <p>Cancelled gigs</p>
          <button className="view-btn">View</button>
        </div>
      </Card> */}
     
    </div>
  );
};

export default Appointment;
