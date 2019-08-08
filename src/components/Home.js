import React, { Component } from 'react';
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
                            <h4>start Borrowing</h4>
                            <p>Info about borrowing</p>
                            <button type="button" className="btn btn-info">Sign Up</button>
                        </div>
                        <div className="start-lend col">
                            <h4>Start Lending</h4>
                            <p>Info about lending</p>
                            <button type="button" className="btn btn-info">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
