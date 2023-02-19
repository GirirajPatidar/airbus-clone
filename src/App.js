import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlightDispaly from './Components/flightDisplay/FlightDispaly';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";


const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
           {/* <Routes>
          <Route to='/' element={<Home />} />
          <Route to='/login' element={<Login />} />
          <Route to='flights' element={<FlightDispaly />} />
        </Routes>  */}
       <Login />
        <Home/>
        <FlightDispaly/>

      </div>

    </Router>
  );
}

export default App;