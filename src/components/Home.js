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
                  <h1 className="title">Welcome to Cedar</h1>
                  <h4>A community dedicated to connecting borrowers and lenders</h4>
                </div>
                <div className="banner-cover" />
                <img className="banner-img" src={bannerImg} alt="cedar trees" />
              </div>
              <div className="container content">
                <div className="row row-home">
                  <h3>What does Cedar do?</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <br />
                <div className="row row-home">
                  <div className="start-borrow col sign-up-opt" style={{borderRightWidth: 1, borderRightStyle: 'solid', borderRightColor: 'black'}}>
                    <h4>Looking to apply for a loan?</h4>
                    <p>Chat with our interative bot, Juniper, to create a profile and find compatible lenders.</p>
                    <button type="button" className="btn btn-info"><Link to='/chatbot' style={{textDecoration: 'none', color: 'white'}}>Start borrowing</Link></button>
                  </div>
                  <div className="start-lend col sign-up-opt">
                    <h4>Looking to lend to others?</h4>
                    <p>Tell us about the businesses you're interested in and we'll match you with suitable prospects.</p>
                    <button type="button" className="btn btn-info"><Link to='/signup' style={{textDecoration: 'none', color: 'white'}}>Start investing</Link></button>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
            <div className="start-lend col">
              <h4>Looking to lend to others?</h4>
              <p>Tell us about the businesses you're interested in and we'll match you with suitable prospects.</p>
              <button type="button" className="btn btn-info"><Link to='/signup' style={{ textDecoration: 'none', color: 'white' }}>Start investing</Link></button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
