import React from 'react';
import '../Styles/Footer.css'; 

const SolutionsSection = () => {
  return (
   <>
     <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section address">
          <h4>Our Address</h4>
          <p>123 Health St.</p>
          <p>MedCity, H1 2345</p>
          <p>Country</p>
        </div>

     
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: support@healthhub.com</p>
          <p>Phone: +2348163338980</p>
          <p>Working Hours: Mon - Fri, 9AM - 5PM</p>
        </div>

   
        <div className="footer-section social-links">
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a><br />
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a><br />
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
     
    </footer>
     <div className="footer-bottom">
    
     <p>&copy; {new Date().getFullYear()} HealthHub. All rights reserved.</p>
     <hr></hr>
   </div>

   </>
    
  );
};

export default SolutionsSection;