
// src/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginstyle.css';

//----------------------------------------------------------------------------------

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = { username, password };


    // REQUEST TO BACKEND -----------------------------------------------
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (response.ok) {
        // Redirect on successful login
        navigate('/home');
      } else {
        setError(result.message || 'Invalid login credentials'); // Fallback error message
      }
    } catch (error) {
      setError('Failed to connect. Please try again later.');
    }
  };

  //----------------------------------------------------------------------------------------------
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setError(''); // Clear error on new input
  };

//---------------------------------------------------------------------------------------------------

  return (
    <div className="login-container">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleInputChange(setUsername)}
            maxLength="1000"
            required
          />

          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="pass"
            name="pass"
            value={password}
            onChange={handleInputChange(setPassword)}
            minLength="6"
            maxLength="12"
            required
          />

          <button type="submit">Submit</button>
          <button type="reset" onClick={() => setError('')}>Reset</button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>} {/* Show error message */}
      <div className="signup-link">
        <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
      </div>
    </div>
  );
}

//------------------------------------------------------------------------------------------------------

export default Login;
