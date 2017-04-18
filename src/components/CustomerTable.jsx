import React from 'react';

import CustomerRow from './CustomerRow';

class CustomerTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listedCustomers: this.props.customers
    };
  }

  render() {
    return (
      <div className="col-xs-12 col-md-6">
        <div className="content-wrap center-text">
          <div className="content-header">
            <h2>Customers</h2>
          </div>
            <div className="content-item">
              <p className="new-customer-cta customer-row" onClick={ () => this.props.setNewStatus(true) }>Add New Customer</p>
            </div>
            { this.state.listedCustomers.map((customer, i) =>
              <CustomerRow key={`customer-${i}`} customer={customer} showCustomer={ this.props.showCustomer }/>)
            }
        </div>
      </div>
    );
  }
}

export default CustomerTable;
