import React, {useState, Fragment} from 'react'
import { Table, Card, CardBody, CardHeader, CardTitle, CardText, Button, CardFooter } from 'reactstrap'
import { FaEye } from "react-icons/fa";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function ApptRequest() {

  const appointments = [
    {
      date: '27 September 2024',
      time: '9:00 am',
      patientName: 'Emmanuella Oze',
      patientId: 'f/24/0243',
      appointmentType: 'Follow up',
      reason: 'Persistent chest pain for the past week',
    },
    {
      date: '30 September 2024',
      time: '3:00 pm',
      patientName: 'Jacob',
      patientId: 'm/24/0045',
      appointmentType: 'Consultancy',
      reason: 'Headeach',
    },
    {
      date: '1 October 2024',
      time: '2:00 pm',
      patientName: 'Haajir',
      patientId: 'f/24/0045',
      appointmentType: 'Consultancy',
      reason: 'Follow up, morning sickness',
    },
  ];

 const [modal, setModal] = useState(false);
 const [selectedPatient, setSelectedPatient] = useState(null);
  const toggle = () => {
    setModal(!modal);
    
  }

  const viewPatient = (appointment) => {
    setSelectedPatient(appointment);
     toggle();
  }
//accept notification
const acceptRequest = () =>{
  alert ("Notification will be Sent");
}

  
  return (
  <div>
    <Card
  className="my-5 mx-5"
  style={{
    width:"80%;",
    height:'max-content'
  }}
>

  <CardHeader style={{width: '100%', fontSize: '30px', textAlign: 'center'}}>
    Appointment Requests
  </CardHeader>
  <CardBody>
   
  <Table  style={{width: '100%'}}>
  <thead >
    <tr>
      <th>
        Date
      </th>
      <th>
       Time
      </th>
      <th>
        Patient Name
      </th>
      <th>
        Patient ID
      </th>
      <th>
        Appointment Type
      </th>
      <th>
        Action
      </th>
    </tr>
  </thead>
  <tbody>
    {appointments.map((appointment, index) =>(
      <tr key={index}>
        <td>{appointment.date}</td>
        <td>{appointment.time}</td>
        <td>{appointment.patientName}</td>
        <td>{appointment.patientId}</td>
        <td>{appointment.appointmentType}</td>
        <td>
        View <FaEye className='vieweye' onClick={() =>viewPatient(appointment)}/>
      </td>
      </tr>

    ))}
  </tbody>
</Table>

{ selectedPatient &&(

<Modal isOpen={modal} toggle={toggle}>
<ModalHeader toggle={toggle}>Patient Information</ModalHeader>
<ModalBody>

  
  <h6><b>Patient Name :</b> {selectedPatient.patientName} </h6>
  <h6> <b> Patient ID :</b> {selectedPatient.patientId}</h6>
  <h6> <b> Patient Diagnosis: </b> {selectedPatient.diagnosis || 'See medical history'} </h6>
  <h6> <b>Appointment type:</b>{selectedPatient.appointmentType} </h6>
   <h6> <b> Reason for the visit:</b> {selectedPatient.reason} </h6>
       
</ModalBody>
<ModalFooter>
<Button onClick={()=> {toggle(); acceptRequest(); } } >
    Accept
  </Button>
  <Button onClick={()=> {toggle(); acceptRequest(); } } >
    Decline
  </Button>
</ModalFooter>
</Modal>

)}

  </CardBody>

</Card>
     
    </div>
  )
}

export default ApptRequest