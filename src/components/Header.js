import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import './Header.css';

const routes = [
  { path: '/'},
  { path: '/chatbot'},
  { path: '/signup'},
  { path: '/profile' },
  { path: '/dashboard'},
  { path: '/messages'}
]

class Header extends Component {
  render () {
    return (
      <div>
        <Navbar fixed="top" bg="light" variant="light">
          <Navbar.Brand>Cedar</Navbar.Brand>
          <Nav className="mr-auto">
            {routes.map(({ path }) => (
              <Nav.Link key={ path }><Link className="navLinks" to={path}>{path}</Link></Nav.Link>
            ))}
          </Nav>
          <button type="button" className="btn btn-success"><Link to='/signup' style={{textDecoration: 'none', color: 'white'}}>Login</Link></button>
        </Navbar>
      </div>
    );
  }
}

export default Header;
