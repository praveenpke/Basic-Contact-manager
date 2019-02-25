import React, { Component } from "react";
import PropTypes from "prop-types";

export class Contact extends Component {
  //second way to put types to props
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };

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

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
