
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signupstyle.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('Male');
  const [dob, setDob] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');

//---------------------------------------------------------------------------------------

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setEvents([...events, value]);
    } else {
      setEvents(events.filter((event) => event !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const signupData = 
    { name,email,mobile,gender,dob,username,password,events,
    };
//----------------------------------------------------------------------------------------

// REQUEST TO BACKEND ----------------------------------------------------------------------
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupData),
      });

      const result = await response.json();

      if (response.ok) {
        window.location.href = '/login'; // Redirect to login page
      } else {
        setError(result.message); // Display server error
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    }
  };

  //-----------------------------------------------------------------------------------------------

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Mobile Number:</label>
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="10 digits"
          pattern="[0-9]{10}"
          required
        />

        <label>Select Gender:</label>
        <input type="radio" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} /> Male
        <input type="radio" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} /> Female
        <input type="radio" value="Other" checked={gender === 'Other'} onChange={(e) => setGender(e.target.value)} /> Other

        <label>Date of Birth:</label>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />

        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        {error && <span className="error-message">{error}</span>}

        <label>Event Categories:</label>
        <label>
          <input type="checkbox" value="Concerts" onChange={handleCheckboxChange} /> Concerts
        </label>
        <label>
          <input type="checkbox" value="Corporate" onChange={handleCheckboxChange} /> Corporate Events
        </label>
        <label>
          <input type="checkbox" value="Family" onChange={handleCheckboxChange} /> Family resorts
        </label>
        <label>
          <input type="checkbox" value="Sports" onChange={handleCheckboxChange} /> Sports
        </label>
        <label>
          <input type="checkbox" value="Stand-up" onChange={handleCheckboxChange} /> Stand-up
        </label>
        <label>
          <input type="checkbox" value="Theatre" onChange={handleCheckboxChange} /> Theatre
        </label>

        <p>
          <button type="submit">Submit</button>
          <button type="reset" onClick={() => setError('')}>Reset</button>
        </p>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

//----------------------------------------------------------------------------------------------------

export default Signup;
