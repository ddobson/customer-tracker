import React from 'react';

const CustomerRow = (props) => {
  return (
    <div className="content-item" onClick={ () => props.showCustomer( props.customer.id )}>
      <p>{ props.customer.name }</p>
    </div>
  );
};

export default CustomerRow;
