import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trNav = 0
    }
  }
  render() {
    return (
      <div className="container">
        <Router>
          <nav className="navbar d-flex justify-content-left">
            <Link className="navbar-brand text-center center-block" to="/">
              <span>
                <p>Test Navbar</p>
              </span>
            </Link>
            <Link className="nav-item" to="/test">
              <span>
                <p>Redirect</p>
              </span>
            </Link>
          </nav>
        </Router>
      </div>
    );
  }
}

export default App;
