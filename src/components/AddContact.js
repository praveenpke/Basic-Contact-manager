import React, { Component } from "react";
import { Consumer } from "../context";
import uuid from "uuid";
export class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    //clear state
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder="Enter Name"
                        value={name} //when we set a value to component it is controlled component, we need event to modify
                        onChange={this.onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="Enter Email Id"
                        value={email}
                        onChange={this.onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control form-control-lg"
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={this.onInputChange}
                      />
                    </div>

                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn btn-primary btn-block"
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
