import React from 'react';

import CustomerRow from './CustomerRow';

import '../styles/CustomerTable.css';

const CustomerTable = (props) => {
  return (
    <div className="col-xs-12 col-md-9">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          { props.customers.map((customer, i) => <CustomerRow key={`customer-${i}`} customer={customer} />) }
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
