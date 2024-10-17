import React from "react";
import { Col, Row } from "reactstrap";
// import Button from "../CustomFiles/Button";
import { Instagram, Twitter, Facebook, GitHub } from "react-feather";
import pic from "../Asset/d.png";

export default function StatsSection() {
  return (
    <div className="section1_whole">
      <div className="container">
        <Row className="">
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="heading_div">
              <div className="mobile_heading_div">
                <h1 className="heading">Care.</h1>
                <h1 className="heading">Consult.</h1>
                <h1 className="heading">Empower.</h1>
                <p className="sub_heading">
                  Empower your pregnancy journey with HealthHub—personalized
                  care and expert support, right at your fingertips.
                </p>

                <button
                  className="market_place_btn nnnn"
                  style={{ marginRight: 10 }}
                >
                  Get Started
                </button>

                <button
                  className="market_place_btn doctor_btn"
                  onClick={() => {
                    alert("Comming Soon");
                  }}
                >
                  Launch App
                </button>
                <h4 className="m-0 mt-5 text-white follow-us ">Follow us</h4>
                <div className="header-icons-div mt-2">
                  <div className="header-icon">
                    <a
                      style={{ color: "white" }}
                      className=""
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHub size="1.5em" />
                    </a>
                  </div>
                  <div className="header-icon">
                    <a
                      style={{ color: "white" }}
                      className=""
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Twitter size="1.5em" />
                    </a>
                  </div>
                  <div className="header-icon">
                    <a
                      style={{ color: "white" }}
                      className=""
                      href="https://fb.me"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Facebook size="1.5em" />
                    </a>
                  </div>
                  <div className="header-icon">
                    <a
                      style={{ color: "white" }}
                      className=""
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Instagram size="1.5em" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="heading_div architecture-container">
              <div className="animate-img">
                <img src={pic} alt="pharmacist" className="header-image" />
              </div>
              <div className="architecture-data1">
                01
                <div className="architecture-content">
                  <p style={{ fontWeight: "bold", margin: 0 }}>
                    Personalized Support.
                  </p>
                  <p>
                    Access personalized pregnancy support through AI-powered
                    guidance tailored to your needs
                  </p>
                </div>
              </div>
              <div className="architecture-data2">
                02
                <div className="architecture-content">
                  <p style={{ fontWeight: "bold", margin: 0 }}>
                    Remote Consultations .
                  </p>
                  <p>
                    Connect with healthcare professionals remotely for expert
                    consultations from anywhere.
                  </p>
                </div>
              </div>
              <div className="architecture-data3">
                03
                <div className="architecture-content">
                  <p style={{ fontWeight: "bold", margin: 0 }}>
                    Seamless Scheduling .
                  </p>
                  <p>
                    Schedule virtual appointments seamlessly for convenient and
                    timely care.
                  </p>
                </div>
              </div>
              <div className="architecture-data4">
                04
                <div className="architecture-content">
                  <p style={{ fontWeight: "bold", margin: 0 }}>
                    Secure Records Management
                  </p>
                  <p>
                    Securely manage your medical records and prescriptions,
                    ensuring privacy and accessibility.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
     
    </div>
  );
}
