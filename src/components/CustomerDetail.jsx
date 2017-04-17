import React from 'react';

const CustomerDetail = (props) => {
  let Content = (
    <p className="center-text">Select a customer to view their details.</p>
  );

  if(Object.keys(props.currentCustomer).length !== 0) {
    Content = (
      <div className="details-wrap">
        <p><span>Email: </span>{ props.currentCustomer.email }</p>
        <p><span>Phone: </span>{ props.currentCustomer.phone }</p>
        <p><span>Street: </span>{ props.currentCustomer.address.street }</p>
        <p><span>City: </span>{ props.currentCustomer.address.city }</p>
        <p><span>State: </span>{ props.currentCustomer.address.state }</p>
        <p><span>Zip: </span>{ props.currentCustomer.address.zip }</p>
        <div className="btn-wrap">
          <button className="details-btn delete" onClick={ () => props.destroyCustomer(props.currentCustomer.id) }>Delete</button>
          <button className="details-btn edit">Edit</button>
        </div>
      </div>
    );
  }

  return (
    <div className="col-xs-12 col-md-6">
      <div className="content-wrap">
        <div className="content-header">
          <h2 className="center-text">{ props.currentCustomer.name || 'Details' }</h2>
        </div>
        <div className="content-item details">
          { Content }
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;
