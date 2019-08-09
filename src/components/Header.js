import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';

import '../stylesheets/Header.css';

const routes = [
  { path: '/' },
  { path: '/chatbot' },
  { path: '/signup' },
  { path: '/profile' },
  { path: '/dashboard' },
  { path: '/messages' }
]

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, show: false };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleClose() {
    this.setState({show: false});
  }

  handleSubmit() {
    this.setState({show: false});
    this.setState({isLoggedIn: true});
  }

  handleShow() {
    this.setState({show: true});
  }

  handleSignOut() {
    this.setState({show: false});
    this.setState({isLoggedIn: false});
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" bg="light" variant="light">
          <Navbar.Brand>Cedar</Navbar.Brand>
          <Nav className="mr-auto">
            {routes.map(({ path }) => (
              <Nav.Link key={path}><Link className="navLinks" to={path}>{path}</Link></Nav.Link>
            ))}
          </Nav>
          { !this.state.isLoggedIn ? (
            <button type="button" className="btn btn-info" onClick={this.handleShow}>Login</button>
          ) : (
            <p>Hello, {this.props.user} | <a className="signOut" onClick={this.handleSignOut}>Sign Out</a></p>
          )}
        </Navbar>
        <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login to Cedar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="email" class="form-control" placeholder="Email" style={{marginBottom: 10}}/>
          <input type="password" class="form-control" placeholder="Password" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default Header;
