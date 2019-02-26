import React, { Component } from "react";
import { Consumer } from "../context";
import uuid from "uuid";
import InputLayout from "./InputLayout";
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
                    <InputLayout
                      type="text"
                      label="Name"
                      name="name"
                      placeholder="Enter Your Name"
                      vaue={name}
                      onChange={this.onInputChange}
                    />

                    <InputLayout
                      type="email"
                      label="Email"
                      name="email"
                      placeholder="Enter Email Id"
                      vaue={email}
                      onChange={this.onInputChange}
                    />

                    <InputLayout
                      type="text"
                      label="Phone"
                      name="phone"
                      placeholder="Enter Phone Number"
                      vaue={phone}
                      onChange={this.onInputChange}
                    />

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
