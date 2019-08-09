import React, { Component } from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import '../stylesheets/Dashboard.css'
import gates from '../images/gates.jpg';
import Footer from './Footer';

class Dashboard extends Component {
  render() {

    let borrowDisp = (
      <div className="col-lg-4 col-md-6">
        <div className="card card-org" key="billgates">
          <img className="card-img-top" src={gates} alt="Card image cap"></img>
          <span class="p-2 badge badge-light borrow-loan">Seeking a Loan</span>
          <div className="card-block d-flex align-items-start">
            <div className="card-body">
              <h5 className="card-title mb-auto p-2">
                Bill Gates, Microsoft
                <small className="title-country" style={{ "opacity": 0.5 }}>USA</small>
              </h5>
              <p className="p-2 card-text text-muted">
                $1,000 to $5,000 with 1% interest
              </p>
              <small className="p-2 card-text text-muted" style={{ "opacity": 0.5 }}>Technology, Startups, America</small>
              <button type="button" className="btn btn-info btn-view-prof">View Profile</button>
            </div>
          </div>
        </div>
      </div>
    );

    let loanDisp = (
      <div className="col-lg-4 col-md-6">
        <div className="card card-org" key="billgates">
          <img className="card-img-top" src={gates} alt="Card image cap"></img>
          <span class="p-2 badge badge-light borrow-loan">Looking to Invest</span>
          <div className="card-block d-flex align-items-start">
            <div className="card-body">
              <h5 className="card-title mb-auto p-2">
                Bill Gates, Microsoft
                <small className="title-country" style={{ "opacity": 0.5 }}>USA</small>
              </h5>
              <p className="p-2 card-text text-muted">$1,000 to $5,000 with 1% interest</p>
              <small className="p-2 card-text text-muted" style={{ "opacity": 0.5 }}>Technology, Startups, America</small>

              <button type="button" className="btn btn-info btn-view-prof">View Profile</button>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <div className="container">
          <div className="row title-row">
            <h3>Organizations For You</h3>
          </div>
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
          <div className="row card-row">
            {borrowDisp}
            {loanDisp}
          </div>
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
          </CardColumns> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
