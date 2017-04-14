// Dependancies
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import config from '../config';

// Components
import Navigation from './Navigation';
import CustomerTable from './CustomerTable';
import NewCustomer from './NewCustomer';

// Styles
import '../styles/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      customers: [],
      isLoading: true,
      hasErrored: false
    };

    this.fetchCustomers = this.fetchCustomers.bind(this);
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
    if (this.state.hasErrored) {
      return <p className="center-text">Sorry, an error has occured.</p>;
    }

    if (this.state.isLoading) {
      return <p className="center-text">Loading...</p>;
    }

    return (
      <BrowserRouter>
        <div className="App">
          <h1 className="center-text">Customer Tracker</h1>
          <div className="row top-xs main">
            <Navigation />
            <Route exact path="/" render={ () => <CustomerTable customers={ this.state.customers }/> } />
            <Route exact path="/new" render={ () => <NewCustomer createCustomer={ this.createCustomer }/> } />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
