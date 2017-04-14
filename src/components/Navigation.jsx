import React from 'react';

import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <nav className="col-xs-12 col-md-3 nav-bar">
      <button className="nav-btn">View Customers</button>
      <button className="nav-btn">New Customer</button>
    </nav>
  );
};

export default Navigation;
