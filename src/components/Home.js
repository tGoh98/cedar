import React, { Component } from 'react';
import '../stylesheets/Home.css'
import bannerImg from '../images/banner.jpg'

class Home extends Component {
    render() {
        return (
            <div className="container">
                home
                <div className="home-banner">
                    <img className="banner-img" src={bannerImg} alt="cedar trees"/>
                </div>
            </div>
        );
    }
}

export default Home;
