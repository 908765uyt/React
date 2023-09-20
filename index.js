import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Welcome to User Form App</h1>
    <Link to="/create">Create User</Link>
    <Link to="/list">User List</Link>
  </div>
);

export default HomePage;
