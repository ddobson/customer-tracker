import React from 'react';

class NewCustomter extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildFormData = this.buildFormData.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = this.buildFormData();
    const form = this.refs.form;

    this.props.createCustomer(formData, form);
  }

  buildFormData() {
    return {
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
      <form ref="form" className="customer-form" onSubmit={ this.handleSubmit }>
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
          <input ref="street" required={true} type="text"/>
        </label>
        <label>
          <span>City:</span>
          <input ref="city" required={true} type="text"/>
        </label>
        <label>
          <span>State:</span>
          <input ref="state" required={true} type="text"/>
        </label>
        <label>
          <span>Zip:</span>
          <input ref="zip" required={true} type="text"/>
        </label>
        <label>
          <div className="btn-wrap">
            <button className="button" type="submit">Submit</button>
          </div>
        </label>
      </form>
    );
  }
}

export default NewCustomter;
