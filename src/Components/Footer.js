import React from 'react';
import '../Styles/Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Font Awesome Icons
import { Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Row className="footer-content">
          <Col md={12} className="footer-section address">
            <h4>Our Address</h4>
            <p>123 Health St.</p>
            <p>Kano State</p>
            <p>Nigeria</p>
          </Col>

          <Col md={4} className="footer-section contact">
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:support@healthhub@gmail.com">support@healthhub@gmail.com</a></p>
            <p>Phone: +2348163338980</p>
            <p>Working Hours: 24/7</p>
          </Col>

          <Col md={4} className="footer-section social-links">
            <h4>Follow Us</h4>
            <p>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook /> Facebook
              </a>
            </p>
            <p>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter /> Twitter
              </a>
            </p>
            <p>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            </p>
          </Col>
        </Row>
      </footer>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HealthHub. All rights reserved.</p>
        <hr />
      </div>
    </>
  );
};

export default Footer;
