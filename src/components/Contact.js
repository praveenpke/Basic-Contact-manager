import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";
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

  deleteContactTrigger = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
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
                <i
                  onClick={this.deleteContactTrigger.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
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
        }}
      </Consumer>
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
