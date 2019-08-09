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
  var data = {};
  
  function addNameDb (agent) {
      data['name'] = agent.parameters.firstName + " " + agent.parameters.lastName;
  }
  function addContactDb (agent) {
      data['contact'] = agent.parameters.email;
  }
  function addRegionDb (agent) {
      data['region'] = agent.parameters.country;
  }
  function addIndustryDb (agent) {
      data['industry'] = agent.parameters.industry;
  }
  function addOrgDb (agent) {
      data['orgName'] = agent.parameters.orgName;
  }
    
  function addLoanDb (agent) {
      data['loanAmount'] = agent.parameters.loanAmount;
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
  intentMap.set('cedar.profile.create.name', addNameDb);
  intentMap.set('cedar.profile.create.contact', addContactDb);
  intentMap.set('cedar.profile.create.region', addRegionDb); 
  intentMap.set('cedar.profile.create.industry', addIndustryDb); intentMap.set('cedar.profile.create.org_name', addOrgDb);
  intentMap.set('cedar.profile.create.loan_amount', addLoanDb);    
  intentMap.set('ReadFromFirebase', readFromDb);
  agent.handleRequest(intentMap);
});