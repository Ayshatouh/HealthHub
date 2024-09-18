import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import PatientLogin from './Components/PatientLogin';  // Adjust path as necessary
import DoctorLogin  from './Components/DoctorLogin';
import Dashboard from './Components/DD/Dashboard';
import Upcoming from './Components/DD/Upcoming';
import Patient from './Components/PD/Patient';
import DoctorProfile from './Components/DD/DoctorProfile';
import ApptRequest from './Components/DD/ApptRequest';
//import PatientProfile from './Components/PD/PatientProfile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patient-login" element={<PatientLogin />} />
      <Route path ="/patientDash" element = {<Patient/>}/>
      <Route path="/doctor-login" element ={<DoctorLogin/>} />
      <Route path='/dashboard' element ={<Dashboard/>} />
      <Route path='/upcoming' element = {<Upcoming/>} />
      <Route path ='/doctorprofile' element ={<DoctorProfile/>} />
      <Route path='/request' element ={<ApptRequest/>}  />
      {/* <Route path ='/patientProfile' element = {<PatientProfile/>} /> */}
     
     
    
    </Routes>
  );
};

export default AppRoutes;
