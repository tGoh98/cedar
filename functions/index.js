'use strict';
const app = require('firebase/app'); //
require('firebase/auth'); //
require('firebase/firestore'); //

const functions = require('firebase-functions');
// const admin = require('firebase-admin');
const { WebhookClient } = require('dialogflow-fulfillment');
const { Card, Suggestion } = require('dialogflow-fulfillment');

const firebaseConfig = { //
  apiKey: "AIzaSyCcOvnTMYAJFBdZuzQawx8Z7tCgCXfylCo",
  authDomain: "crollo-xxoykw.firebaseapp.com",
  databaseURL: "https://crollo-xxoykw.firebaseio.com/",
  projectId: "crollo-xxoykw",
  storageBucket: "",
  appId: "1:716632137718:web:75ba185462453105"
};

process.env.DEBUG = 'dialogflow:*'; // enables lib debugging statements

app.initializeApp(firebaseConfig);
const db = app.firestore();

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  var data = {};
    
  function addToDb (agent) {
      var json = request.body;
      json.outputContexts.forEach(function(context, index) {
          agent.add(context.name);
          if (JSON.stringify(context.name).includes('cedarprofilecreate-followup')) {
              data['name'] = context.parameters.firstName + " " + context.parameters.lastName;
              
              data['region'] = context.parameters.country;
              
              data['contact'] = context.parameters.email;
              
              data['industry'] = context.parameters.industry;
              
              data['orgName'] = context.parameters.orgName;
              
              data['loanAmount'] = context.parameters.loanAmount.amount;
              
          }
      });
      //agent.add(data['region']);
      db.collection('borrowers').add(data);
  }
    
  function editDb (agent) {
      var name = agent.parameters.firstName + " " + agent.parameters.lastName;
      var entry = db.collection('borrowers').where('name', '==', name).get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              console.log(doc.id, " => ", doc.data());
              doc.update()
          })
      })
  }
  function readFromDb (agent) {
      
  }

  // Map from Dialogflow intent names to functions to be run when the intent is matched
  let intentMap = new Map();
  intentMap.set('cedar.profile.create', readFromDb)
  intentMap.set('cedar.profile.create.loan_amount', addToDb);    
  intentMap.set('ReadFromFirebase', editDb);
  agent.handleRequest(intentMap);
});