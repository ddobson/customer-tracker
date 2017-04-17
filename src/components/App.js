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
      editingCustomer: false,
      isLoading: true,
      hasErrored: false
    };

    this.setEditStatus = this.setEditStatus.bind(this);
    this.fetchCustomers = this.fetchCustomers.bind(this);
    this.showCustomer = this.showCustomer.bind(this);
    this.createCustomer = this.createCustomer.bind(this);
    this.updateCustomer = this.updateCustomer.bind(this);
    this.destroyCustomer = this.destroyCustomer.bind(this);
  }

  componentDidMount() {
    this.fetchCustomers();
  }

  setEditStatus(bool) {
    this.setState({ editingCustomer: bool });
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
    const result = customers.find((customer) => customer.id === id);

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

  updateCustomer(data) {
    fetch(`${config[process.env.NODE_ENV]}/customers/${data.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then((customer) => {
        const customers = this.state.customers.slice();
        for (let i = 0; i < customers.length; i++) {
          if (customers[i].id === data.id) {
            customers[i] = customer;
          }
        }

        this.setState({ customers, currentCustomer: customer, editingCustomer: false });
      })
      .catch(() => this.setState({ hasErrored: true }));
  }

  destroyCustomer(id) {
    fetch(`${config[process.env.NODE_ENV]}/customers/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const customers = this.state.customers
          .slice()
          .filter((customer) => customer.id !== id);
        this.setState({ customers, currentCustomer: {} });
      })
      .catch(() => this.setState({ hasErrored: true }));
  }

  render() {
    let Content = () => (
      <div className="col-xs-12 col-md-9">
        <div className="box">
          <div className="row">
            <CustomerTable customers={ this.state.customers } showCustomer={ this.showCustomer }/>
            <CustomerDetail
              setEditStatus={ this.setEditStatus }
              currentCustomer={ this.state.currentCustomer } 
              destroyCustomer={ this.destroyCustomer }
              editingCustomer={ this.state.editingCustomer }
              updateCustomer={ this.updateCustomer }
            />
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
