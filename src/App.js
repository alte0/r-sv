import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { PageSingUp } from './pages/sing-up';
import { PageSingIn } from './pages/sing-in';

import "normalize.css";
import './App.scss';

const App = () => {
return (
    <div className={"app-container"}>
      <Router>
          <Route
              exact
              path="/">
            {({ match }) => (
                <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="animate"
                    unmountOnExit
                >
                  <div className="animate">
                    <PageSingIn/>
                  </div>
                </CSSTransition>
            )}
          </Route>
          <Route
              exact
              path="/sing-up">
              {({ match }) => (
                  <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="animate"
                      unmountOnExit
                  >
                    <div className="animate">
                      <PageSingUp/>
                    </div>
                  </CSSTransition>
              )}
          </Route>
      </Router>
    </div>
  )
}

export default App;
