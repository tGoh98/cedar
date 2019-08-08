import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Main.css';
import Intro from './Intro';
import Home from './Home';

const routes = [
  { path: '/', Component: Home },
  { path: '/chatbot', Component: Chatbot }
  { path: '/signup', Component: SignUp },
  { path: '/profile', Component: Profile },
  { path: '/dashboard', Component: Dashboard },
  { path: '/messages', Component: Messages }
]

function Main({ location }) {
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames={'fade'}
      >
        <section className="route-section">
          <Switch location={location}>
            {routes.map(({path,Component}) => (
              <Route key={path} exact path={path} component={Component}></Route>
            ))}
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(Main);
