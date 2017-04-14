import React from 'react';

const CustomerTable = () => {
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
      </table>
    </div>
  );
};

export default CustomerTable;
