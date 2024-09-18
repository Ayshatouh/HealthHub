import React from 'react'
import { FaUserCircle } from 'react-icons/fa'; // For Patient Icon
import { MdEdit } from 'react-icons/md'; // For Edit Profile Icon
import { FaVideo } from 'react-icons/fa'; // For Video Consultation Icon
import './patient.css'; // Create a separate CSS file for styling
import pic from '../../Asset/Pic3.jpg'
import { useNavigate } from 'react-router-dom';


function Patient() {
  const navigate = useNavigate(); // To navigate to other pages

  const viewPatient = () => {
    navigate ('/patientProfile');
  }
  return (
   <>
    <div className="header">
      <div className="header__left">
        <FaUserCircle size={40} color="white" />
        <span className="header__title">WELCOME to Patient Dashboard</span>
      </div>
      <div className="header__right">
        <MdEdit size={30} color="white" />
        <span className="header__update">Update Profile</span>
      </div>
    </div>
    <div>
      
    </div>
    <div className="bodySection">
    <img src={pic} alt="Profile Pic" className='bgPic' />
      <div className="bodySection__left">
        <ul className="options__list">
          <li onClick={viewPatient}>View Profile</li>
          <li>Book an Appointment</li>
        </ul>
      </div>
      
      <div className='videoConsultation'>
        <h3>Emergency Consultation</h3>
        <p>+30% Extra Charges</p>
        <div className="bodySection__right">
        <FaVideo size={50} color="blue" />
        <p className="videoConsultation__text">Video Consultation</p>
        </div>
      </div>
    </div>
   </>
    
  )
}

export default Patient
 