import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route path="/add" component={AddContact} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
