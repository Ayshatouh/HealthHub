// import React from 'react';
// import '../Styles/Footer.css';
// import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Font Awesome Icons
// import { Row, Col } from 'reactstrap';

// const Footer = () => {
//   return (
//     <>
//       <footer className="footer">
//         <Row className="footer-content">
//           <Col md={12} className="footer-section address">
//             <h4>Our Address</h4>
//             <p>123 Health St.</p>
//             <p>Kano State</p>
//             <p>Nigeria</p>
//           </Col>

//           <Col md={4} className="footer-section contact">
//             <h4>Contact Us</h4>
//             <p>Email: <a href="mailto:support@healthhub@gmail.com">support@healthhub@gmail.com</a></p>
//             <p>Phone: +2348163338980</p>
//             <p>Working Hours: 24/7</p>
//           </Col>

//           <Col md={4} className="footer-section social-links">
//             <h4>Follow Us</h4>
//             <p>
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                 <FaFacebook /> Facebook
//               </a>
//             </p>
//             <p>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                 <FaTwitter /> Twitter
//               </a>
//             </p>
//             <p>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin /> LinkedIn
//               </a>
//             </p>
//           </Col>
//         </Row>
//       </footer>

//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} HealthHub. All rights reserved.</p>
//         <hr />
//       </div>
//     </>
//   );
// };

// export default Footer;


import React from "react";
import { Col, Row } from "reactstrap";
import Clock from "react-live-clock";
import { Instagram, Twitter, Facebook, GitHub } from "react-feather";
export default function Footer() {
  return (
    <div className="section_divider">
      <Row className="m-0">
        <Col md={2}>
          <div className="paper-div">
            <div className="paper-div-item">
              <p className="m-0">
                <a
                  href={"/"}
                  rel="noreferrer"
                  target="_blank"
                  className="text-secondary"
                >
                  HealthHub
                </a>
              </p>
            </div>
          </div>
        </Col>
        <Col md={8}>
          <p className="m-0" style={{ fontSize: 13 }}>
            <marquee className="m-0" style={{ color: "white" }}>
              <Clock
                filter={(date) => date.replace("8", "7a")}
                format={"HH:mm:ss, dddd, MMMM Mo, YYYY"}
                ticking={true}
                style={{ margin: "0" }}
              />
              {". "}
            </marquee>
          </p>
        </Col>
        <Col md={2}>
          <div className="header-icons-div">
            <div className="header-icon">
              <a
                style={{ color: "white" }}
                className=""
                href="https://github.com/Ayshatouh/HealthHub.git"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub size="1em" />
              </a>
            </div>
            <div className="header-icon">
              <a
                style={{ color: "white" }}
                className=""
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size="1em" />
              </a>
            </div>
            <div className="header-icon">
              <a
                style={{ color: "white" }}
                className=""
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter size="1em" />
              </a>
            </div>
            <div className="header-icon">
              <a
                style={{ color: "white" }}
                className=""
                href="https://fb.me/"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook size="1em" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
