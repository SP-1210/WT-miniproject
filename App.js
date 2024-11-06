// import React from 'react';
// import './App.css';
// import Login from './Login';

// function App() {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }

// export default App;

// // src/App.js
// import React from 'react';
// import './App.css';
// //import Login from './Login';
// import Signup from './Signup';

// function App() {
//   return (
//     <div className="App">
//       {/* Render Signup component for now, 
//           but in the future, you can set up routing here */}
//       <Signup />
//       {/* Replace <Signup /> with <Login /> if you want to view the login page */}
//     </div>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          {/* Optional: Navigation Links */}
          <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
