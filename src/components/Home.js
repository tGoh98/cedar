import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Home.css';
import bannerImg from '../images/banner.jpg';
import Footer from './Footer';

class Home extends Component {
    render() {
        return (
            <div>
              <div className="home-banner">
                <div className="centered">
                  <h1>Welcome to Cedar</h1>
                  <h4>A community dedicated to connecting borrowers and lenders</h4>
                </div>
                <div className="banner-cover" />
                <img className="banner-img" src={bannerImg} alt="cedar trees" />
              </div>
              <div className="container sign-up">
                <div className="sign-up-opt row">
                  <div className="start-borrow col" style={{borderRightWidth: 1, borderRightStyle: 'solid', borderRightColor: 'black'}}>
                    <h4>Looking to apply for a loan?</h4>
                    <p>Chat with Juniper, our interative bot, to create a profile and find compatible lenders.</p>
                    <button type="button" className="btn btn-info"><Link to='/chatbot' style={{textDecoration: 'none', color: 'white'}}>Start borrowing</Link></button>
                  </div>
                  <div className="start-lend col">
                    <h4>Looking to lend to others?</h4>
                    <p>Tell us what businesses you're interested in and we'll match you with suitable prospects.</p>
                    <button type="button" className="btn btn-info"><Link to='/signup' style={{textDecoration: 'none', color: 'white'}}>Start investing</Link></button>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
        );
    }
}

export default Home;
