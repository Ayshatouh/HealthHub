import React from 'react';
import { useNavigate } from 'react-router';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import '../Styles/navbar.css'
import logo from '../Asset/logo.jpg';

function NavigationBar() {
  const navigate = useNavigate ();
  const doctorLogin = ()=>{
    navigate ('/doctor-login');
  }
  const patientLogin = () =>{
    navigate ('/patient-login');
  }
  return (
    <div>
      <Navbar color='#4A90E2' className='navstyle' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <NavbarBrand color='white' href="/" className="me-auto light">
         <b className='white'>Health<span className='logo'>Hub </span></b> 
          </NavbarBrand>

        {/* Flexbox style applied to Nav items  I also remove navbar*/}
        <Nav className="nav-flex" >
          <div className='d-flex'>
          <NavItem>
            <NavLink to="/about/" style={{ color: 'white', textDecoration: 'none', cursor:'pointer', fontWeight: '600' }}  >About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to ="/Services" style={{ color: 'white', textDecoration: 'none', cursor:'pointer', fontWeight:'600' }} >Our Services</NavLink>
          </NavItem>
           {/* Dropdown menu */}
           <NavItem>
            <UncontrolledDropdown nav >
            <DropdownToggle nav caret style={{ color: 'white', textDecoration: 'none' }}>
              Login
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={doctorLogin}>Doctor </DropdownItem>
              <DropdownItem onClick={patientLogin} >Patient</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Phamacy</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
           </NavItem>
          </div>

         
        </Nav>


      </Navbar>
    </div>
  );
}

export default NavigationBar;




// import React, { useState } from 'react';
// import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
// import '../Styles/navbar.css'

// const NavigationBar = ({ toggleSidebar }) => {
//   //i change it to true 1
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleNavbar = () => setIsOpen(!isOpen);

//   const [collapsed, setCollapsed] = useState(true);

//   //const toggleNavbar = () => setCollapsed(!collapsed);

//   return (
//     <div>
//       <Navbar color="light" light >
//         <NavbarBrand href="/" className="me-auto light">
//          <b>HealthHub</b> 
//         </NavbarBrand>
//         <NavbarToggler onClick={toggleNavbar} className="me-2" />
//         <Collapse isOpen={!isOpen} navbar>
//           <Nav navbar>
//             <NavItem>
//               <NavLink to="/doctor-login" className="navitems" style={{textDecoration:"none"}}>Doctor's Login</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink to="/patient-login" className="navitems" style={{textDecoration:"none"}}>
//                 Patient's Login
//               </NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// };

// export default NavigationBar;
