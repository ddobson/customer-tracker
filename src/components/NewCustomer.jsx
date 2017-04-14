import React from 'react';

import '../styles/NewCustomer.css';

class NewCustomter extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-md-9">
        <form ref="form" className="customer-form">
          <label>
            <span>Name: </span>
            <input ref="name" required={true} type="text"/>
          </label>
          <label>
            <span>Email: </span>
            <input ref="email" required={true} placeholder="example@email.com" type="email"/>
          </label>
          <label>
            <span>Phone: </span>
            <input ref="phone" required={true} placeholder="123-555-1234" type="text"/>
          </label>
          <label>
            <span>Street Address: </span>
            <input ref="address1" required={true} type="text"/>
          </label>
          <label>
            <span>City:</span>
            <input ref="address1" required={true} type="text"/>
          </label>
          <label>
            <span>State:</span>
            <input ref="address1" required={true} type="text"/>
          </label>
          <label>
            <span>Zip:</span>
            <input ref="address1" required={true} type="text"/>
          </label>
          <label>
            <button className="button">Submit</button>
          </label>
        </form>
      </div>
    );
  }
}

export default NewCustomter;
