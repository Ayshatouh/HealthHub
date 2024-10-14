import React from 'react';
import {Link} from 'react-router-dom'
import '../Styles/Starts.css'; // Add your own styles here

const StatsSection = () => {
  return (

   <div>
  
    <section className="stats" id='starts' >


    <div className="stat">
        <p>Consultations</p>
      </div>
      <div className="stat">
       <Link to="/pregnancysupport"  style={{textDecoration: "none"}} > <p>Pregnancy Support</p></Link>
      </div>
      <div className="stat">
        <p>Child Support</p>
      </div>
 
  
    </section>
   </div>
  );
};

export default StatsSection;
