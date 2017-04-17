import React from 'react';

import CustomerRow from './CustomerRow';

const CustomerTable = (props) => {
  return (
    <div className="col-xs-12 col-md-6">
      <div className="content-wrap center-text">
        <div className="content-header">
          <h2>Customers</h2>
        </div>
          { props.customers.map((customer, i) => <CustomerRow key={`customer-${i}`} customer={customer} showCustomer={ props.showCustomer }/>) }
      </div>
    </div>
  );
};

export default CustomerTable;
