import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.scss';
import "normalize.css";

class App extends Component {
  render() {
    return (
        <div className={"app-container"}>
          <Router>
            <Switch>
              <Route
                  exact
                  path="/">
                <p>Main</p>
              </Route>
              <Route
                  path="/sing-in">
                <p>sing-in</p>
              </Route>
              <Route
                  path="/sing-up">
                <p>sing-up</p>
              </Route>
              <Route
                  path="/success-in">
                <p>success-in</p>
              </Route>
              <Route
                  path="/success-up">
                <p>success-up</p>
              </Route>
            </Switch>
          </Router>
        </div>
        )
  }

  constructor(props) {
    super(props);

    this.initialState = {
      isAuth: false
    }

    this.state = this.initialState;
  }
}

export default App;
