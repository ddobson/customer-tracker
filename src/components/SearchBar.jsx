import React from 'react';

import '../styles/forms.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    event.preventDefault();

    this.props.searchCustomers(event.target.value);
  }

  render() {
    return (
      <div className="content-item">
        <div action="search" className="customer-form" >
          <label className="search">
            <input type="search" placeholder="Search name or email" onChange={ this.handleInput }/>
          </label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
