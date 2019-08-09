import React, { Component } from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import profilePic from '../images/zuck.jpg';
import gates from '../images/gates.jpg';
import '../stylesheets/Profile.css';
import Footer from './Footer';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="container" style={{ paddingTop: 10 }}>
          <div className="row profile-head">
            <div className="col-3">
              <img src={profilePic} className="profileImg" alt="profile" />
            </div>
            <div className="col-9 profile-head-text">
              <h3>Mark Zuckerburg<button type="button" style={{ float: 'right' }} className="btn btn-info btn-sm">Edit Profile</button></h3>
              <p className="text-muted">Facebook, Inc. | USA</p>
              <p>Hey there! I'm Mark, an aspiring computer programmer. Feel free to shoot me a message to learn more about what Facebook does!</p>
            </div>
          </div>
          <br />
          <div className="row">
            <h4>What is Facebook about?</h4>
            <p>Facebook is a company dedicated to giving people the power to build community and bring the world closer together. We were founded 15 years ago and have been growing at a tremendous rate ever since.</p>
          </div>
          <br />
          <div className="row">
            <h4>Network</h4>
          </div>
          <div className="row">
            <CardColumns>
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
            </CardColumns>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Profile;
