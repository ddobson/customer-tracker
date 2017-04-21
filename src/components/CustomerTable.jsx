import React from 'react';

import CustomerRow from './CustomerRow';
import SearchBar from './SearchBar';

class CustomerTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFiltered: false,
      filteredCustomers: []
    };

    this.searchCustomers = this.searchCustomers.bind(this);
    this.filterCusutomers = this.filterCusutomers.bind(this);
  }

  searchCustomers(keyWord) {
    if (keyWord) {
      const filteredCustomers = this.filterCusutomers(keyWord);
      this.setState({ filteredCustomers, showFiltered: true });
    } else {
      this.setState({ showFiltered: false });
    }
  }

  filterCusutomers(keyWord) {
    const customers = this.props.customers;
    const regex = new RegExp(keyWord, 'gi');

    return customers.filter((customer) => {
      return customer.name.match(regex) || customer.email.match(regex);
    });
  }

  render() {
    let customers = this.props.customers;

    if (this.state.showFiltered) {
      customers = this.state.filteredCustomers;
    }

    return (
      <div className="col-xs-12 col-md-6">
        <div className="content-wrap center-text">
          <div className="content-header">
            <h2>Customers</h2>
          </div>
            <div className="content-item">
              <p className="new-customer-cta customer-row" onClick={ () => this.props.setNewStatus(true) }>Add New Customer</p>
            </div>
            <SearchBar searchCustomers={ this.searchCustomers }/>
            { customers.map((customer, i) =>
              <CustomerRow key={`customer-${i}`} customer={customer} showCustomer={ this.props.showCustomer }/>)
            }
        </div>
      </div>
    );
  }
}

export default CustomerTable;
