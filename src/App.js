import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <AddContact />
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
