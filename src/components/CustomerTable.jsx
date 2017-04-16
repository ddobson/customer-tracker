import React from 'react';

import CustomerRow from './CustomerRow';

import '../styles/CustomerTable.css';

const CustomerTable = (props) => {
  return (
    <div className="col-xs-12 col-md-4">
      <div className="list-wrap center-text">
        <div className="list-header">
          <h2>Customers</h2>
        </div>
          { props.customers.map((customer, i) => <CustomerRow key={`customer-${i}`} customer={customer} showCustomer={ props.showCustomer }/>) }
      </div>
    </div>
  );
};

export default CustomerTable;
