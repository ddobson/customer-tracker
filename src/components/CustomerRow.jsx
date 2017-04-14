import React from 'react';

const CustomerRow = (props) => {
  return (
    <tr>
      <td>{ props.customer.id }</td>
      <td>{ props.customer.name }</td>
      <td>{ props.customer.email }</td>
      <td>EDIT</td>
      <td>DELETE</td>
    </tr>
  );
};

export default CustomerRow;
