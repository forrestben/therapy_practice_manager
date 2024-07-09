import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (auth && auth.logout) {
      auth.logout();
      navigate('/login');
    }
  };

  if (!auth || !auth.user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {auth.user.name}!</p>
      <button onClick={handleLogout}>Logout</button>
      {/* Add more dashboard content here */}
    </div>
  );
};

export default Dashboard;