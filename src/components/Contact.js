import React, { Component } from "react";

export class Contact extends Component {
  render() {
    const { name, email } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>{email}</li>
          <li>{this.props.phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
