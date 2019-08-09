import React, { Component } from 'react';
import Footer from './Footer';
import '../stylesheets/Chatbot.css'

class Chatbot extends Component {
  render() {
    return (
      <div className="chatbot-container">
        <div>
          <iframe
            allow="microphone;"
            width="100%"
            height="700px"
            src="https://console.dialogflow.com/api-client/demo/embedded/9d59eabc-d808-429d-9d00-950af3e4a504">
          </iframe>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Chatbot;
