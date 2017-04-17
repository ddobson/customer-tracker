import React from 'react';

class EditCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.buildFormData = this.buildFormData.bind(this);
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.setEditStatus(false);
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = this.buildFormData();

    this.props.updateCustomer(formData);
  }

  buildFormData() {
    return {
      id: this.props.customer.id,
      name: this.refs.name.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
      address: {
        street: this.refs.street.value,
        city: this.refs.city.value,
        state: this.refs.state.value,
        zip: this.refs.zip.value
      }
    };
  }

  render() {
    return (
      <div className="details-wrap">
       <form ref="form" className="customer-form" onSubmit={ this.handleSubmit }>
          <label>
            <span>Name: </span>
            <input ref="name" required={true} type="text" defaultValue={ this.props.customer.name } />
          </label>
          <label>
            <span>Email: </span>
            <input ref="email" required={true} defaultValue={ this.props.customer.email } type="email"/>
          </label>
          <label>
            <span>Phone: </span>
            <input ref="phone" required={true} defaultValue={ this.props.customer.phone } type="text"/>
          </label>
          <label>
            <span>Street Address: </span>
            <input ref="street" required={true} defaultValue={ this.props.customer.address.street } type="text"/>
          </label>
          <label>
            <span>City:</span>
            <input ref="city" required={true} defaultValue={ this.props.customer.address.city } type="text"/>
          </label>
          <label>
            <span>State:</span>
            <input ref="state" required={true} defaultValue={ this.props.customer.address.state } type="text"/>
          </label>
          <label>
            <span>Zip:</span>
            <input ref="zip" required={true} defaultValue={ this.props.customer.address.zip } type="text"/>
          </label>
          <label>
            <div className="btn-wrap">
              <button className="details-btn" type="submit" onClick={ this.handleSubmit }>Submit</button>
              <button className="details-btn" onClick={ this.handleCancel }>Cancel</button>
            </div>
          </label>
        </form>
      </div>
    );
  }
}

export default EditCustomer;
