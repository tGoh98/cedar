import React, { Component } from 'react';

import bannerImg from '../images/banner.jpg'

class Home extends Component {
    render() {
        return (
            <div>
                <section className="home-banner">
                    <img src={bannerImg} />
                </section>
            </div>
        );
    }
}

export default Home;