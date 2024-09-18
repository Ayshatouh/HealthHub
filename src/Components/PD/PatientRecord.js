import React, { useState } from 'react';
import '../PD/Record.css';
import { Card, Col, Row } from 'reactstrap';


const PatientDashboard = () => {
  // Sample patient data
  const patients = [
    { id: 1, name: 'Emmanuella Oze', age: 29, gender: 'Female', patientId: 'f/24/0243', diagnosis: 'Diabetes', appointmentType: 'Follow up', emergencycontact: '08163338980', contact: '08137880945', vitals: { heartRate: '80 bpm', bloodPressure: '120/80 mmHg' }, labResults: ['Blood Test', 'X-Ray'], clinicalNotes: ['Note 1', 'Note 2'], billingStatus: 'Paid' },
    { id: 2, name: 'Jacob Green', age: 34, gender: 'Male', patientId: 'm/24/0045', diagnosis: 'Hypertension', appointmentType: 'Consultancy', contact: '08137880945', emergencycontact: '08163338980', vitals: { heartRate: '72 bpm', bloodPressure: '130/85 mmHg' }, labResults: ['CT Scan'], clinicalNotes: ['Note 3'], billingStatus: 'Pending' },
    // Add more patients here
  ];

  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="patient-dashboard">
      {/* Patient List as a Table */}
      {!selectedPatient && (
        <div className="patient-table">
          <h2>Patient List</h2>
          <table>
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Name</th>
                <th>Appointment Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={patient.id}>
                  <td>{index + 1}</td>
                  <td>{patient.name}</td>
                  <td>{patient.appointmentType}</td>
                  <td>
                    <button onClick={() => handlePatientClick(patient)} >View Record</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Patient Details View */}
      {selectedPatient && (
        <div className="patient-details">
          <div className="details-card">
            <Row>
                <Col>
                <Card className='cardcontent'>
            <h4>Patient Information</h4>
            <hr></hr>
            <p><strong>Name:</strong> {selectedPatient.name}</p>
            <p><strong>Age:</strong> {selectedPatient.age}</p>
            <p><strong>Gender:</strong> {selectedPatient.gender}</p>
            <p><strong>Patient ID:</strong> {selectedPatient.patientId}</p>
            <p><strong>Diagnosis:</strong> {selectedPatient.diagnosis}</p>
            <p><strong>Appointment Type:</strong> {selectedPatient.appointmentType}</p>
            <p><strong>Contact Information:</strong> {selectedPatient.contact}</p>
            <p><strong>Emergency Contact:</strong> {selectedPatient.emergencycontact}</p>
            </Card>
         
                </Col>
                  </Row>
                <Row> 
                <Col>

                {/* Lab Results */}
            <Card className='cardcontent'>
            <section className="lab-results">
              <h4>Lab Results</h4>
              <hr></hr>
              <ul>
                {selectedPatient.labResults.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </section>
            </Card>
                </Col>
                <Row>
                <Col>
                {/* Clinical Notes */}
                <Card className='cardcontent'>
                <section className="clinical-notes">
              <h4>Diagnosis</h4>
              <hr></hr>
              <ul>
                {selectedPatient.clinicalNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </section>
                </Card>
                </Col>
                </Row>

                <Row>

                <Col>
                      {/* Billing Status */}
                <Card className='cardcontent'>
                <section className="billing">
              <h4>Billing Status</h4>
              <hr></hr>
              <p>{selectedPatient.billingStatus}</p>
            </section>
                </Card>
                </Col>
                </Row>
                <Col>
                <Card className='cardcontent'>
            <section className="vitals">
              <h4>Vitals</h4>
              <hr></hr>
              <p><strong>Heart Rate:</strong> {selectedPatient.vitals.heartRate}</p>
              <p><strong>Blood Pressure:</strong> {selectedPatient.vitals.bloodPressure}</p>
            </section>
            </Card>
                </Col>

            </Row>

           
          </div>
          <button onClick={() => setSelectedPatient(null)} className='btnrecord'>Back to Patient List</button>
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;
