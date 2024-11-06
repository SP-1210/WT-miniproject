
// src/Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signupstyle.css'; // Ensure this matches the existing CSS file name

function Signup() {
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');
  
   const handleSubmit = (event) => {
     if (password !== confirmPassword) {
       event.preventDefault();
       setError('Passwords do not match.');
     }
   };
  

  return (
    <div className="signup-container">
      <h1>SIGN UP</h1>
      <form method="get" action="success.html" target="_blank">
        <label>Name:</label>
        <input type="text" name="name" size="30" maxLength="1000" required />

        <label>Email:</label>
        <input type="email" name="email" required />

        <label>Mobile number:</label>
        <input type="tel" name="num" placeholder="10 digits" pattern="[0-9]{10}" required />

        <label>Select Your City:</label>
        <select name="city" required>
          <option value="A">Delhi</option>
          <option value="B">Bangalore</option>
          <option value="C">Mumbai</option>
          <option value="D">Chennai</option>
          <option value="E">Hyderabad</option>
          <option value="F">Ahmedabad</option>
          <option value="G">Goa</option>
          <option value="H">Raipur</option>
          <option value="I">Bhopal</option>
          <option value="J">Allahabad</option>
        </select>

        <label>Add copy of Aadhar card or Driver's License:</label>
        <input type="file" name="file1" multiple required />

        <label>Select Gender:</label>
        <input type="radio" name="gender" value="Male" defaultChecked /> Male
        <input type="radio" name="gender" value="Female" /> Female
        <input type="radio" name="gender" value="Null" /> Prefer not to say

        <label>Select DOB:</label>
        <input type="date" name="date" required />

        <label>Username:</label>
        <input type="text" id="username" name="username" required />


<div className="form-group">
           <label htmlFor="password">Password:</label>
           <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
         </div>

         <div className="form-group">
           <label htmlFor="confirmPassword">Confirm Password:</label>
           <input
             type="password"
             id="confirmPassword"
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)}
             required
           />
           {error && <span className="error-message">{error}</span>}
         </div>

        <label>Select Event Categories:</label>
        <label><input type="checkbox" name="events" value="athletics" /> Concerts</label>
        <label><input type="checkbox" name="events" value="race" /> Stand-up Comedies</label>
        <label><input type="checkbox" name="events" value="tennis" /> Theatre</label>
        <label><input type="checkbox" name="events" value="equestrian" /> Sports</label>
        <label><input type="checkbox" name="events" value="ice" /> Team Activities</label>
        <label><input type="checkbox" name="events" value="pole" /> Resorts and Retreats</label>

        <p><label> <input type="checkbox" name="tnc" value="tnc" required /> I agree to terms of service.</label></p>

        <p>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        </p>
        
      </form>

      <div className="login-link">
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
}

export default Signup;
