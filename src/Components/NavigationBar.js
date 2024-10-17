import React from "react";
import logo from "../Asset/logo.jpg";
import { useNavigate } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
// import { login } from '../utils/helper'
export default function NavigationBar() {
  const navigate = useNavigate();
  const doctorLogin = () => {
    navigate("/doctor-login");
  };
  const patientLogin = () => {
    navigate("/patient-login");
  };
  return (
    <div className="nav_bar large_nav_bar">
      <div className="container">
        <Row className="m-0">
          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
            <div
              style={{
                display: "flex",
                //     justifyContent: "center",
                alignItems: "center",
                height: "75px",
              }}
            >
              <div>
                <img
                  src={logo}
                  alt="drugcipherlogo"
                  style={{ width: 50, borderRadius: 10 }}
                />
                <h5 className="dc-name">HealthHub</h5>
              </div>
            </div>
          </Col>
          <Col className="" xl={6} lg={6} md={6} sm={6} xs={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                height: "75px",
              }}
            >
              <div>
                <Button
                  className={"market_place_btn"}
                  onClick={() => {
                    alert("Coming soon...");
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
