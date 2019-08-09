import React, { Component } from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profilePic from '../images/steve.jpg';
import gates from '../images/gates.jpg';
import '../stylesheets/Profile.css';
import Footer from './Footer';

import lendData from '../tempData/borrowers.json'

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    let loanDisp = lendData.data.map((l) => {

      var imgPath = "/images/" + l.avatar;

      return (<div className="col-lg-4 col-md-6">
        <div className="card card-org" key={l.userId}>
          <img className="card-img-top" src={imgPath} alt="Card image cap"></img>
          <span class="p-2 badge badge-light borrow-loan">Looking to Invest</span>
          <div className="card-block d-flex align-items-start">
            <div className="card-body">
              <h5 className="card-title mb-auto p-2">
                {l.name}, {l.orgName}
                <small className="title-country" style={{ "opacity": 0.5 }}>{l.region}</small>
              </h5>
              <p className="p-2 card-text text-muted">
                $1,000 to $5,000 with 1% interest
            </p>
              <small className="p-2 card-text text-muted" style={{ "opacity": 0.5 }}>Technology, Startups, America</small>
              <button type="button" id={l.userId} className="btn btn-info btn-view-prof" onClick={this.handlePageChange}><Link to='/profile' style={{ textDecoration: 'none', color: 'white' }}>View Profile</Link></button>
            </div>
          </div>
        </div>
      </div>)
    });

    return (
      <div>
        <div className="container" style={{ paddingTop: 10 }}>
          <div className="row row-profile profile-head">
            <div className="col-3">
              <img src={profilePic} className="profileImg" alt="profile" />
            </div>
            <div className="col-9 profile-head-text">
              <h3>
                Steve Rodgers
                {!this.props.visit &&
                  <button type="button" style={{ float: 'right' }} className="btn btn-info btn-sm">Message Steve</button>}
              </h3>
              <p className="text-muted">HYDRA | Global</p>
              <p>Hi buddy, the name's Steve Rogers. I work with HYDRA to recover sacred artifacts like the Tesseract. Hail HYDRA!</p>
            </div>
          </div>
          <br />
          <div className="row row-profile">
            <h4>What is HYDRA about?</h4>
            <p style={{color: 'white'}}>_____________________________________________________________________________________________________________________</p>
            <p style={{textDecoration: 'line-through'}}>[Redacted]</p>
          </div>
          <br />
          <div className="row row-profile">
            <h4>Network</h4>
          </div>
          <div className="row row-profile network-row">
            {loanDisp}
            {/* <CardColumns>
              <Card>
                <Card.Img variant="top" src={gates} style={{ maxHeight: 250 }} />
                <Card.Body>
                  <Card.Title>Bill Gates<button type="button" style={{ float: 'right' }} className="btn btn-info">View Profile</button></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Microsoft | USA</Card.Subtitle>
                  <Card.Text></Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Tags: Technology, Startups, America</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={gates} style={{ maxHeight: 250 }} />
                <Card.Body>
                  <Card.Title>Bill Gates<button type="button" style={{ float: 'right' }} className="btn btn-info">View Profile</button></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Microsoft | USA</Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Tags: Technology, Startups, America</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={gates} style={{ maxHeight: 250 }} />
                <Card.Body>
                  <Card.Title>Bill Gates<button type="button" style={{ float: 'right' }} className="btn btn-info">View Profile</button></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Microsoft | USA</Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Tags: Technology, Startups, America</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={gates} style={{ maxHeight: 250 }} />
                <Card.Body>
                  <Card.Title>Bill Gates<button type="button" style={{ float: 'right' }} className="btn btn-info">View Profile</button></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Microsoft | USA</Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Tags: Technology, Startups, America</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={gates} style={{ maxHeight: 250 }} />
                <Card.Body>
                  <Card.Title>Bill Gates<button type="button" style={{ float: 'right' }} className="btn btn-info">View Profile</button></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Microsoft | USA</Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Tags: Technology, Startups, America</small>
                </Card.Footer>
              </Card>
            </CardColumns> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Profile;
