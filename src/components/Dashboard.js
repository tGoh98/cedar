import React, { Component } from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import gates from '../images/gates.jpg';

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
              <h3>Organizations</h3>
              <div className="form-row">
                  <div className="form-group col-6">
                      <label for="searchTerm">Search term:</label>
                      <input type="text" class="form-control" placeholder='Enter a keyword. Example: "tech"' id="keyword" />
                  </div>
                  <div className="form-group col-3">
                      <label for="sortBy">Sort by:</label>
                      <select class="form-control" id="sortBy">
                          <option>-</option>
                          <option>Loan amount</option>
                          <option>Interest rate</option>
                          <option>Business category</option>
                      </select>
                  </div>
                  <div className="form-group col-3">
                      <label for="order">Order:</label>
                      <select class="form-control" id="order">
                          <option>-</option>
                          <option>Ascending</option>
                          <option>Descending</option>
                      </select>
                  </div>
              </div>
              <CardColumns>
                <Card>
                  <Card.Img variant="top" src={gates} style={{maxHeight: 250}}/>
                  <Card.Body>
                    <Card.Title>Bill Gates<button type="button" style={{float: 'right'}} className="btn btn-info">View Profile</button></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Microsoft | USA</Card.Subtitle>
                    <Card.Text></Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Tags: Technology, Startups, America</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src={gates} style={{maxHeight: 250}}/>
                  <Card.Body>
                    <Card.Title>Bill Gates<button type="button" style={{float: 'right'}} className="btn btn-info">View Profile</button></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Microsoft | USA</Card.Subtitle>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Tags: Technology, Startups, America</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src={gates} style={{maxHeight: 250}}/>
                  <Card.Body>
                    <Card.Title>Bill Gates<button type="button" style={{float: 'right'}} className="btn btn-info">View Profile</button></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Microsoft | USA</Card.Subtitle>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Tags: Technology, Startups, America</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src={gates} style={{maxHeight: 250}}/>
                  <Card.Body>
                    <Card.Title>Bill Gates<button type="button" style={{float: 'right'}} className="btn btn-info">View Profile</button></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Microsoft | USA</Card.Subtitle>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Tags: Technology, Startups, America</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src={gates} style={{maxHeight: 250}}/>
                  <Card.Body>
                    <Card.Title>Bill Gates<button type="button" style={{float: 'right'}} className="btn btn-info">View Profile</button></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Microsoft | USA</Card.Subtitle>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Tags: Technology, Startups, America</small>
                  </Card.Footer>
                </Card>
                </CardColumns>
            </div>
        );
    }
}

export default Dashboard;
