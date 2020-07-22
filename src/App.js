import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageSingUp } from './pages/sing-up';
import { PageSingIn } from './pages/sing-in';

import "normalize.css";
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      isAuth: false
    }

    this.state = this.initialState;
  }

  render() {
    return (
        <div className={"app-container"}>
          <Router>
            <Switch>
              <Route
                  exact
                  path="/">
                <PageSingIn/>
                <PageSingUp/>
              </Route>
              <Route
                  path="/sing-in">
                <PageSingIn/>
              </Route>
              <Route
                  path="/sing-up">
                <PageSingUp/>
              </Route>
            </Switch>
          </Router>
        </div>
    )
  }
}

export default App;
