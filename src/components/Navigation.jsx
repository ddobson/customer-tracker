import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <nav className="col-xs-12 col-md-3 nav-bar">
      <Link className="nav-btn center-text" to="/">View Customers</Link>
      <Link className="nav-btn center-text" to="/new">New Customer</Link>
  </nav>
  );
};

export default Navigation;
