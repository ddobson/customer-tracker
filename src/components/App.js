// Dependancies
import React from 'react';
import config from '../config';

// Components
import Navigation from './Navigation';
import CustomerTable from './CustomerTable';

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

  render() {
    if (this.state.hasErrored) {
      return <p className="center-text">Sorry, an error has occured.</p>;
    }

    if (this.state.isLoading) {
      return <p className="center-text">Loading...</p>;
    }

    return (
      <div className="App">
        <h1 className="center-text">Customer Tracker</h1>
        <div className="row content">
          <Navigation />
          <CustomerTable customers={ this.state.customers } />
        </div>
      </div>
    );
  }
}

export default App;
