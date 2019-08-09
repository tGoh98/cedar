import React, { Component } from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../stylesheets/Dashboard.css'
import gates from '../images/gates.jpg';
import avatar from '../images/avatar.png';
import Footer from './Footer';

import borrowData from '../tempData/borrowers.json'
import lendData from '../tempData/lenders.json'


class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(e) {
    this.props.setVisit(true);
    this.props.setSelectedUser(e.target.id);
  }

  render() {

    let borrowDisp = borrowData.data.map((b) => {

      var imgPath = "/images/" + b.avatar;

      return (<div className="col-lg-4 col-md-6">
        <div className="card card-org" key={b.userId}>
          <img className="card-img-top" src={imgPath} alt="Avatar"></img>
          <span class="p-2 badge badge-light borrow-loan">Seeking a Loan</span>
          <div className="card-block d-flex align-items-start">
            <div className="card-body">
              <h5 className="card-title mb-auto p-2">
                {b.name}, {b.orgName}
                <small className="title-country" style={{ "opacity": 0.5 }}>{b.region}</small>
              </h5>
              <p className="p-2 card-text text-muted">
                {b.seeking}
              </p>
              <small className="p-2 card-text text-muted" style={{ "opacity": 0.5 }}>{b.tags}</small>
              <button type="button" className="btn btn-info btn-view-prof" onClick={this.handlePageChange}><Link to='/profile' style={{ textDecoration: 'none', color: 'white' }}>View Profile</Link></button>
            </div>
          </div>
        </div>
      </div>)
    });

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
                {l.seeking}
            </p>
              <small className="p-2 card-text text-muted" style={{ "opacity": 0.5 }}>{l.tags}</small>
              <button type="button" className="btn btn-info btn-view-prof"><Link to='/profile' style={{ textDecoration: 'none', color: 'white' }} onClick={()=>this.props.setShowModes(false)}>View Profile</Link></button>
            </div>
          </div>
        </div>
      </div>)
    });

    let billDisp = (
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

    let lDisp = (
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
            {this.props.userType !== "borrower" && borrowDisp}
            {this.props.userType === "borrower" && loanDisp}
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
