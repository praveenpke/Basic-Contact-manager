import React, { Component } from "react";
import PropTypes from "prop-types";

export class Contact extends Component {
  //second way to put types to props
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };

  state = {
    showCard: false
  };

  showContact = () => {
    this.setState({
      showCard: true
    });
    console.log(this.state);
  };

  hideContact = () => {
    this.setState({
      showCard: false
    });
    console.log(this.state);
  };

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <span>
            {" "}
            {!this.state.showCard ? (
              <i
                style={linkCursorStyle}
                onClick={this.showContact}
                className="fas fa-chevron-circle-down"
              />
            ) : (
              <i
                style={linkCursorStyle}
                onClick={this.hideContact}
                className="fas fa-chevron-circle-up"
              />
            )}
          </span>
        </h4>
        {this.state.showCard ? (
          <ul className="list-group">
            <li className="list-group-item bg-light">{email}</li>
            <li className="list-group-item bg-light">{phone}</li>
          </ul>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const linkCursorStyle = {
  cursor: "pointer"
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
