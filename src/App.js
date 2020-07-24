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
      <Router basename="/r-sv/" >
          <Route
              exact
              path="/">
            {({ match }) => (
                <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                >
                  <div className="page">
                    <PageSingIn/>
                  </div>
                </CSSTransition>
            )}
          </Route>
          <Route
              path="/sing-up">
              {({ match }) => (
                  <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="page"
                      unmountOnExit
                  >
                    <div className="page">
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
