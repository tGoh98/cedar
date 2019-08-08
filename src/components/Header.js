import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand">Cedar</span>
            <ul className="navbar-nav">
              {routes.map(({ path, Component }) => (
                <li key={ path } className='nav-item'>
                  <Link key={ path } className="nav-link" to={ path }>{ path }</Link>
                </li>
              ))}
            </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
