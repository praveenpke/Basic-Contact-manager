import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

export class Contacts extends Component {
  onDeleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <div className="container">
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteClickhandler={this.onDeleteContact.bind(
                    this,
                    contact.id
                  )}
                />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
