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

const app = require('../node_modules/firebase/app');
require('firebase/auth');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCcOvnTMYAJFBdZuzQawx8Z7tCgCXfylCo",
  authDomain: "crollo-xxoykw.firebaseapp.com",
  databaseURL: "https://crollo-xxoykw.firebaseio.com/",
  projectId: "crollo-xxoykw",
  storageBucket: "",
  appId: "1:716632137718:web:75ba185462453105"
};

app.initializeApp(firebaseConfig);
const db = app.firestore();

function Main({ location }) {
  const [user, setUser] = useState('mark');
  const [selectedUser, setSelectedUser] = useState('bill');
  const [userType, setUserType] = useState('borrower');

  console.log("Testing Database:");
  var dbRef = db.collection('borrowers');
  dbRef.doc("dude0").set({
    contact: "mail@gmail.com",
    industry: ["tech"],
    loanAmount: {
      amount: 5000,
      currency: "USD"
    },
    orgName: "Facebook",
    region: "Canada" });
  // db.collection('borrowers').get().then(function (data) {
  //   data.forEach(function(doc) {
  //       console.log(doc.id, " => ", doc.data());
  //   });
  // })

  return (
    <div>
      <Header user={user} />
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path='/' render={(props) => <Home user={user} selectedUser={selectedUser} userType={userType} setUser={setUser} setSelectedUser={setSelectedUser} setUserType={setUserType} />}></Route>
              <Route exact path='/chatbot' render={(props) => <Chatbot user={user} selectedUser={selectedUser} userType={userType} setUser={setUser} setSelectedUser={setSelectedUser} setUserType={setUserType} />}></Route>
              <Route exact path='/signup' render={(props) => <SignUp user={user} selectedUser={selectedUser} userType={userType} setUser={setUser} setSelectedUser={setSelectedUser} setUserType={setUserType} />}></Route>
              <Route exact path='/profile' render={(props) => <Profile user={user} selectedUser={selectedUser} userType={userType} setUser={setUser} setSelectedUser={setSelectedUser} setUserType={setUserType} />}></Route>
              <Route exact path='/dashboard' render={(props) => <Dashboard user={user} selectedUser={selectedUser} userType={userType} setUser={setUser} setSelectedUser={setSelectedUser} setUserType={setUserType} />}></Route>
              <Route exact path='/messages' render={(props) => <Messages user={user} selectedUser={selectedUser} userType={userType} setUser={setUser} setSelectedUser={setSelectedUser} setUserType={setUserType} />}></Route>
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(Main);
