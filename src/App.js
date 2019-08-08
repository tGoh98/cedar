import React from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.css';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Messages from './components/Messages';

const routes = [
  { path: '/', Component: Home },
  { path: '/chatbot', Component: Chatbot },
  { path: '/signup', Component: SignUp },
  { path: '/profile', Component: Profile },
  { path: '/dashboard', Component: Dashboard },
  { path: '/messages', Component: Messages }
]

function Main({ location }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to='/'>Cedar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/chatbot'>Chatbot</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/signup'>Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/profile'>Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/messages'>Messages</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/dashboard'>Dashboard</Link>
            </li>
          </ul>
        </div>
      </nav>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <section className="route-section">
            <Switch location={location}>
              {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path} component={Component}></Route>
              ))}
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(Main);
