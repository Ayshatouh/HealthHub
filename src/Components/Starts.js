import React from 'react';
import '../Styles/Starts.css'; // Add your own styles here

const StatsSection = () => {
  return (
    <section className="stats">
      <div className="stat">
        <h3>5000+</h3>
        <p>monthly queries</p>
      </div>
      <div className="stat">
        <h3>5000+</h3>
        <p>monthly hours of consultations</p>
      </div>
      <div className="stat">
        <h3>300+</h3>
        <p>registered doctors</p>
      </div>
      <div className="stat">
        <h3>5000+</h3>
        <p>registered patients</p>
      </div>
    </section>
  );
};

export default StatsSection;
