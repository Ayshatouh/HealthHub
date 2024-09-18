// App.js
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import HeroSection from './Components/HeroSection';
import SolutionsSection from './Components/Footer';
import StatsSection from './Components/Starts';
import AppRoutes from './Routes';
function App() {
  return (
    

   <Router>

    <AppRoutes/>
     
   </Router>
  
 
   
  );
}

export default App;
