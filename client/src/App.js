import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<h1>Welcome to Therapy Practice Manager</h1>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;