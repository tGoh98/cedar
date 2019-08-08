import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Home.css'
import bannerImg from '../images/banner.jpg'

class Home extends Component {
    render() {
        return (
            <div>
              <div className="home-banner">
                <div className="banner-cover" />
                <img className="banner-img" src={bannerImg} />
                <h3 className="banner-header">Cedar</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id.</p>
              </div>
              <div className="container sign-up">
                <div className="sign-up-opt row">
                  <div className="start-borrow col">
                    <h4>Looking to apply for a loan?</h4>
                    <p>Chat with Juniper, our interative bot, to create a profile and find compatible lenders.</p>
                    <button type="button" className="btn btn-info"><Link to='/chatbot' style={{textDecoration: 'none', color: 'black'}}>Start borrowing</Link></button>
                  </div>
                  <div className="start-lend col">
                    <h4>Looking to lend to others?</h4>
                    <p>Tell us what businesses you're interested in and we'll match you with suitable prospects.</p>
                    <button type="button" className="btn btn-info"><Link to='/signup' style={{textDecoration: 'none', color: 'black'}}>Start investing</Link></button>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Home;
