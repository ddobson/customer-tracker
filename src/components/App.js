// Dependancies
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import config from '../config';

// Components
import Navigation from './Navigation';
import CustomerTable from './CustomerTable';
import CustomerDetail from './CustomerDetail';
import NewCustomer from './NewCustomer';

// Styles
import '../styles/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      customers: [],
      currentCustomer: {},
      isLoading: true,
      hasErrored: false
    };

    this.fetchCustomers = this.fetchCustomers.bind(this);
    this.showCustomer = this.showCustomer.bind(this);
    this.createCustomer = this.createCustomer.bind(this);
  }

  componentDidMount() {
    this.fetchCustomers();
  }

  fetchCustomers() {
    fetch(`${config[process.env.NODE_ENV]}/customers`)
      .then(response => response.json())
      .then((customers) => {
        this.setState({ customers, isLoading: false });
      })
      .catch(() => this.setState({ hasErrored: true }));
  }

  showCustomer(id) {
    const customers = this.state.customers;
    const result = customers.filter((customer) => customer.id === id)[0];

    this.setState({ currentCustomer: result });
  }

  createCustomer(data, form) {
    fetch(`${config[process.env.NODE_ENV]}/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then((customer) => {
        const customers = this.state.customers.slice();
        customers.push(customer);
        this.setState({ customers });
      })
      .then(() => form.reset())
      .catch(() => this.setState({ hasErrored: true }));
  }

  render() {
    let Content = () => (
      <div className="col-xs-12 col-md-9">
        <div className="box">
          <div className="row">
            <CustomerTable customers={ this.state.customers } showCustomer={ this.showCustomer }/>
            <CustomerDetail currentCustomer={ this.state.currentCustomer }/>
          </div>
        </div>
      </div>
    );

    if (this.state.hasErrored) {
      Content = () => <p className="center-text">Sorry, an error has occured.</p>;
    }

    if (this.state.isLoading) {
      Content = () => <p className="center-text">Loading...</p>;
    }

    return (
      <BrowserRouter>
        <div className="App">
          <h1 className="center-text">Customer Tracker</h1>
          <div className="row top-xs main">
            <Navigation />
            <Route exact path="/" component={ Content }/>
            <Route exact path="/new" render={ () => <NewCustomer createCustomer={ this.createCustomer }/> } />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
