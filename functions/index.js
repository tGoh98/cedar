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

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });

  console.log("Printing something in the console");

  function writeToDb (agent) {
    db.collection('borrowers').add({
      name: agent.parameters.firstName + agent.parameters.lastName

    })
    .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });


    


  }

  // Map from Dialogflow intent names to functions to be run when the intent is matched
  let intentMap = new Map();
  intentMap.set('ReadFromFirestore', readFromDb);
  intentMap.set('cedar.profile.create.name', writeToDb);
  agent.handleRequest(intentMap);
});