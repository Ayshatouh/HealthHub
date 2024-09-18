import React from 'react';
import './PatientProfile.css'; // Create a CSS file for styling

const PatientProfile = () => {
  return (
    <div className="patientProfile">
      <h1>Patient Profile</h1>

      {/* Bio-data Section */}
      <div className="section bioData">
        <h2>Bio-data</h2>
        <div className="bioData__content">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Date of Birth:</strong> 01/01/1990</p>
          <p><strong>Gender:</strong> Male</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
        </div>
      </div>

      {/* Medical History Section */}
      <div className="section medicalHistory">
        <h2>Medical History</h2>
        <div className="medicalHistory__content">
          <p><strong>Last Visit:</strong> 12/06/2023</p>
          <p><strong>Diagnoses:</strong> Hypertension, Diabetes</p>
          <p><strong>Prescriptions:</strong> Amlodipine, Metformin</p>
        </div>
      </div>

      {/* Current Condition Section */}
      <div className="section currentCondition">
        <h2>Current Condition</h2>
        <div className="currentCondition__content">
          <p><strong>Symptoms:</strong> Chest pain, Headache</p>
          <p><strong>Ongoing Medications:</strong> Amlodipine</p>
          <p><strong>Comments:</strong> Feeling better after medications but still monitoring blood pressure.</p>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
