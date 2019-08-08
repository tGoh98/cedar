'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const {WebhookClient} = require('dialogflow-fulfillment');

process.env.DEBUG = 'dialogflow:*'; // enables lib debugging statements
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });

  function writeToDb (agent) {
    // Get parameter from Dialogflow with the string to add to the database
    const firstName = agent.parameters.firstName;
    // const lastName = agent.parameters.lastName;

    // Get the database collection 'dialogflow' and document 'agent' and store
    // the document  {entry: "<value of database entry>"} in the 'agent' document
    const dialogflowAgentRef = db.collection('borrowers').doc('agent');
    return db.runTransaction(t => {
      t.set(dialogflowAgentRef, {entry: firstName});
      return Promise.resolve('Write complete');
    }).then(doc => {
      agent.add(`Wrote "${firstName}" to the Firestore database.`);
    }).catch(err => {
      console.log(`Error writing to Firestore: ${err}`);
      agent.add(`Failed to write "${firstName}" to the Firestore database.`);
    });
  }

  function readFromDb (agent) {
    // Get the database collection 'dialogflow' and document 'agent'
    const dialogflowAgentDoc = db.collection('dialogflow').doc('agent');

    // Get the value of 'entry' in the document and send it to the user
    return dialogflowAgentDoc.get()
      .then(doc => {
        if (!doc.exists) {
          agent.add('No data found in the database!');
        } else {
          agent.add(doc.data().entry);
        }
        return Promise.resolve('Read complete');
      }).catch(() => {
        agent.add('Error reading entry from the Firestore database.');
        agent.add('Please add a entry to the database first by saying, "Write <your phrase> to the database"');
      });
  }

  // Map from Dialogflow intent names to functions to be run when the intent is matched
  let intentMap = new Map();
  intentMap.set('ReadFromFirestore', readFromDb);
  intentMap.set('cedar.profile.create.name', writeToDb);
  agent.handleRequest(intentMap);
});