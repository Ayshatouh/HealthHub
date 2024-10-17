import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import cate from "../Asset/messages.png";
function Services() {
  const services = [
    {
      title: "AI-Powered Symptom Analysis",
      description:
        "Personalized health advice and recommendations based on symptoms.",
    },
    {
      title: "Virtual Consultations",
      description:
        "Video, audio, and chat consultations with healthcare professionals.",
    },
    {
      title: "Electronic Prescriptions",
      description: "Digital prescriptions for easy medication management.",
    },
    {
      title: "Medication Management",
      description: "Tracking and reminders for medication schedules.",
    },
    {
      title: "Secure Messaging",
      description:
        "Direct communication with healthcare providers through a secure platform.",
    },
    {
      title: "Appointment Scheduling",
      description: "Convenient scheduling of virtual consultations.",
    },
    {
      title: "Health Monitoring",
      description: "Ongoing monitoring of health metrics and follow-up care.",
    },
    {
      title: "Personalized Health Recommendations",
      description:
        "Tailored advice based on individual health profiles and needs.",
    },
    {
      title: "EMR Management",
      description:
        "Efficient storage and sharing of medical records for continuity of care.",
    },
  ];
  return (
    <div className="mt-3 mb-2">
      <div className="container">
        <h1 className="text-center"> Our Services</h1>
        <section className="stats" id="starts">
          <Row>
            {services.map((item) => (
              <Col md={4} className="mb-2">
                <Card className="index_top_card shadow-sm p-3">
                  <h4 className="text-center">{item.title}</h4>
                  <p className="categories_item">{item.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </div>
    </div>
  );
}

export default Services;
