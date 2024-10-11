import React, { useState } from 'react';
import './WishList.css';
import emailjs from 'emailjs-com'; // Import EmailJS

const WishList = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [message, setMessage] = useState('');

  // Send email using EmailJS
  const sendEmails = (e) => {
    e.preventDefault();

    if (formData.name && formData.email) {
      // Send email to yourself (admin)
      emailjs.send('service_b6xb63m', 'template_e9lyb4l', formData, 'VHd-E4Kx1bggDxw-O')
        .then((result) => {
          console.log(result.text);
          // Send confirmation email to user
          emailjs.send('service_b6xb63m', 'template_7dz4jza', formData, 'VHd-E4Kx1bggDxw-O')
            .then((result) => {
              console.log('Confirmation email sent:', result.text);
              setMessage('Thank you for signing up! A confirmation email has been sent to you.');
              setFormData({ name: '', email: '' }); // Reset form
            }, (error) => {
              console.log('Error sending confirmation email:', error.text);
              setMessage('Thank you for signing up! However, there was an issue sending your confirmation email.');
            });
        }, (error) => {
          console.log('Error sending admin email:', error.text);
          setMessage('Oops! Something went wrong while sending your information.');
        });
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signup-container">
      <h2>Sign up to stay updated on the app!</h2>
      <form onSubmit={sendEmails} className="signup-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Sign Up</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default WishList;
