// // src/Login.js
// import React from 'react';
// import './loginstyle.css';

// function Login() {
//   return (
//     <div className="login-container">
//       <h1>LOGIN</h1>
//       <form id="login" method="get" action="WTI1.html" target="_self">
//         <div className="form-group">
//           <label htmlFor="username">Username:</label><br />
//           <input type="text" id="username" name="username" maxLength="1000" required />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="pass">Password:</label><br />
//           <input type="password" id="pass" name="pass" minLength="6" maxLength="12" required />
//         </div>

//         <div className="button-group">
//           <button type="submit">Submit</button>
//           <button type="reset">Reset</button>
//         </div>
//       </form>

//       <div id="response" className="response"></div>
//     </div>
//   );
// }

// export default Login;



// src/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import './loginstyle.css'; // Make sure this matches the existing CSS file name

function Login() {
  return (
    <div className="login-container">
      <h1>LOGIN</h1>
      <form id="login" method="get" action="WTI1.html" target="_self">
        <div className="container">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" maxLength="1000" required />

          <label htmlFor="pass">Password:</label>
          <input type="password" id="pass" name="pass" minLength="6" maxLength="12" required />

          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
      <div className="signup-link">
        <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
      </div>
    </div>
  );
}

export default Login;
