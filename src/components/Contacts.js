import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

export class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <div className="container">
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
