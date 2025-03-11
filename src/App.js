import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login';
import Homepage from './components/Homepage';
import './App.css';
import GetEmployees from './components/GetEmployees';
import UpdateEmployee from './components/UpdateEmployee'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={isLoggedIn ? <Homepage /> : <Login onLogin={handleLogin} />} />
          <Route exact path="/getemployees" element={<GetEmployees />}></Route>
          <Route exact path='/update-employee' element={<UpdateEmployee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
