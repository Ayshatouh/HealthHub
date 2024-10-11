import React from 'react';
import {Link} from 'react-router-dom'
import '../Styles/Starts.css'; // Add your own styles here

const StatsSection = () => {
  return (
    <section className="stats">
      <div className="stat">
        
        <p>Search Doctor</p>
      </div>
      <div className="stat">
       <Link to="/pregnancysupport"> <p>Pregancy Support</p></Link>
      </div>
      <div className="stat">
        <p>registered doctors</p>
      </div>
  
    </section>
  );
};

export default StatsSection;
