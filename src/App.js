import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="John Doe" email="jd@gmail.com" phone="555-555-5555" />
          <Contact name="Jamie" email="jm@gmail.com" phone="555-555-5555" />
        </div>
      </div>
    );
  }
}

export default App;
