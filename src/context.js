import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
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
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
