

// FRONT END ONLY


// src/App.js
import React from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

//-----------------------------------------------------------------------------------

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<h1>Home Page</h1>} /> 
        </Routes>
      </div>
    </Router>
  );
}

//---------------------------------------------------------------------------------------

export default App;
