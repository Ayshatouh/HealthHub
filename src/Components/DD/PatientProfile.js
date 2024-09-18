import React from 'react';
import '../DD/PatientProfile.css';

const PatientProfile = () => {
  // Sample array of patient data
  const patientData = {
    bioData: {
      name: 'Jacob',
      dob: '01/01/1990',
      gender: 'Male',
      phone: '+123 456 7890',
      email: 'john.doe@example.com',
    },
    medicalHistory: {
      lastVisit: '12/06/2023',
      diagnoses: 'Hypertension, Diabetes',
      prescriptions: 'Amlodipine, Metformin',
    },
    currentCondition: {
      symptoms: 'Chest pain, Headache',
      medications: 'Amlodipine',
      comments: 'Feeling better after medications but still monitoring blood pressure.',
    },
  };

  return (
    <div className="patientProfile">
      <h1>Patient Profile</h1>

      {/* Bio-data Section */}
      <div className="section bioData">
        <h2>Bio-data</h2>
        <div className="bioData__content">
          <p><strong>Name:</strong> {patientData.bioData.name}</p>
          <p><strong>Date of Birth:</strong> {patientData.bioData.dob}</p>
          <p><strong>Gender:</strong> {patientData.bioData.gender}</p>
          <p><strong>Phone:</strong> {patientData.bioData.phone}</p>
          <p><strong>Email:</strong> {patientData.bioData.email}</p>
        </div>
      </div>

      {/* Medical History Section */}
      <div className="section medicalHistory">
        <h2>Medical History</h2>
        <div className="medicalHistory__content">
          <p><strong>Last Visit:</strong> {patientData.medicalHistory.lastVisit}</p>
          <p><strong>Diagnoses:</strong> {patientData.medicalHistory.diagnoses}</p>
          <p><strong>Prescriptions:</strong> {patientData.medicalHistory.prescriptions}</p>
        </div>
      </div>

      {/* Current Condition Section */}
      <div className="section currentCondition">
        <h2>Current Condition</h2>
        <div className="currentCondition__content">
          <p><strong>Symptoms:</strong> {patientData.currentCondition.symptoms}</p>
          <p><strong>Ongoing Medications:</strong> {patientData.currentCondition.medications}</p>
          <p><strong>Comments:</strong> {patientData.currentCondition.comments}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
