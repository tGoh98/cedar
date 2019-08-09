'use strict';
const app = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');

const functions = require('firebase-functions');
// const admin = require('firebase-admin');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

const firebaseConfig = {
    apiKey: "AIzaSyCcOvnTMYAJFBdZuzQawx8Z7tCgCXfylCo",
    authDomain: "crollo-xxoykw.firebaseapp.com",
    databaseURL: "https://crollo-xxoykw.firebaseio.com/",
    projectId: "crollo-xxoykw",
    storageBucket: "",
    appId:"1:716632137718:web:75ba185462453105"
};

process.env.DEBUG = 'dialogflow:*'; // enables lib debugging statements

app.initializeApp(firebaseConfig);
const db = app.firestore();

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
    
  function addToDb (agent) {
      var data = {};
      var context = response['outputContexts'];
      agent.add(context);
      for (i = 0; i < context.length; i++) {
          if (context[i].includes('/cedarprofilecreate-followup')) {
              data['name'] = context[i]['parameters']['firstName'] + " " + context[i]['parameters']['lastName'];
              
              data['region'] = context[i]['parameters']['country'];
              
              data['contact'] = context[i]['parameters']['email'];
              
              data['industry'] = context[i]['parameters']['industry'][0];
              
              data['orgName'] = context[i]['parameters']['orgName'];
              
              data['loanAmount'] = context[i]['parameters']['loanAmount'];
              
          }
      }
      
      db.collection('borrowers').add(data)
    .then(function() {
      console.log("Document successfully written!");
      agent.add("Thanks for creating a profile!");
      data = {};
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
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
  intentMap.set('cedar.profile.create.loan_amount', addToDb);    
  intentMap.set('ReadFromFirebase', readFromDb);
  agent.handleRequest(intentMap);
});