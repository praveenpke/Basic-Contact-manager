import React, { Component } from "react";
import Contact from "./Contact";
export class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jd@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "James",
        email: "jm@gmail.com",
        phone: "551-155-5555"
      },
      {
        id: 3,
        name: "karen",
        email: "jk@gmail.com",
        phone: "000-555-5555"
      }
    ]
  };

  onDeleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className="container">
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickhandler={this.onDeleteContact.bind(this, contact.id)}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
