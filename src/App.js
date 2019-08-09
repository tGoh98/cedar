import React, { useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.css';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Messages from './components/Messages';
import Header from './components/Header';

function Main({ location }) {
  const [user, setUser] = useState('mark');
  const [selectedUser, setSelectedUser] = useState('bill');

  return (
    <div>
      <Header />
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path='/' render={(props) => <Home user={user} selectedUser={selectedUser} />}></Route>
              <Route exact path='/chatbot' render={(props) => <Chatbot user={user} selectedUser={selectedUser} />}></Route>
              <Route exact path='/signup' render={(props) => <SignUp user={user} selectedUser={selectedUser} />}></Route>
              <Route exact path='/profile' render={(props) => <Profile user={user} selectedUser={selectedUser} />}></Route>
              <Route exact path='/dashboard' render={(props) => <Dashboard user={user} selectedUser={selectedUser} />}></Route>
              <Route exact path='/messages' render={(props) => <Messages user={user} selectedUser={selectedUser} />}></Route>
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(Main);
