// import React from 'react';
// import { useNavigate } from 'react-router';
// import { HashLink } from 'react-router-hash-link';
// import {
//   Navbar,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from 'reactstrap';
// import '../Styles/navbar.css'
// import logo from '../Asset/logo.jpg';

// function NavigationBar() {
//   const navigate = useNavigate ();
//   const doctorLogin = ()=>{
//     navigate ('/doctor-login');
//   }
//   const patientLogin = () =>{
//     navigate ('/patient-login');
//   }
//   return (
//     <div>
//       <Navbar color='' className='navstyle' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//       <NavbarBrand color='white' href="/" className="me-auto light">
//          <b className='white'>Health<span className='logo'>Hub </span></b>
//           </NavbarBrand>
//         {/* Flexbox style applied to Nav items  I also remove navbar*/}
//         <Nav>
//           <div className='d-flex'>
//           <NavItem >
//             <HashLink to="/about/" className="nav-flex"  style={{ color: 'white', textDecoration: 'none', cursor:'pointer', fontWeight: '600' }}  >About Us</HashLink>
//           </NavItem>
//           <NavItem>
//             <HashLink  smooth to ="#starts" className="nav-flex"  style={{ color: 'white', textDecoration: 'none', cursor:'pointer', fontWeight:'600' }} >Our Services</HashLink>
//           </NavItem>
//            {/* Dropdown menu */}
//
//           </div>

//         </Nav>

//       </Navbar>
//     </div>
//   );
// }

// export default NavigationBar;

// // import React, { useState } from 'react';
// // import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
// // import { NavLink } from 'react-router-dom';
// // import '../Styles/navbar.css'

// // const NavigationBar = ({ toggleSidebar }) => {
// //   //i change it to true 1
// //   const [isOpen, setIsOpen] = useState(true);

// //   const toggleNavbar = () => setIsOpen(!isOpen);

// //   const [collapsed, setCollapsed] = useState(true);

// //   //const toggleNavbar = () => setCollapsed(!collapsed);

// //   return (
// //     <div>
// //       <Navbar color="light" light >
// //         <NavbarBrand href="/" className="me-auto light">
// //          <b>HealthHub</b>
// //         </NavbarBrand>
// //         <NavbarToggler onClick={toggleNavbar} className="me-2" />
// //         <Collapse isOpen={!isOpen} navbar>
// //           <Nav navbar>
// //             <NavItem>
// //               <NavLink to="/doctor-login" className="navitems" style={{textDecoration:"none"}}>Doctor's Login</NavLink>
// //             </NavItem>
// //             <NavItem>
// //               <NavLink to="/patient-login" className="navitems" style={{textDecoration:"none"}}>
// //                 Patient's Login
// //               </NavLink>
// //             </NavItem>
// //           </Nav>
// //         </Collapse>
// //       </Navbar>
// //     </div>
// //   );
// // };

// // export default NavigationBar;

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
              <Button className={"market_place_btn"}>Get Started</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
