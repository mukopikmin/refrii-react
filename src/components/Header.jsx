import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/boxes">BoxList</Link>
          </li>
          <li>
            <Link to="/signin">Signin</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
